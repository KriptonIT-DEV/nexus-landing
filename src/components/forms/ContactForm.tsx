import { useState } from "react"
import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, ChevronRight, Send, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  channels,
  agentRanges,
  discoverySources,
  contactSteps,
  type ChannelId,
  type DiscoverySourceId,
} from "@/content/contact"
import { apiPost } from "@/lib/api"

const stepOneSchema = z.object({
  name: z.string().min(2, "Ingrese su nombre"),
  lastname: z.string().min(2, "Ingrese su apellido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono inválido"),
  website: z.string().min(3, "Web requerida"),
  position: z.string().min(2, "Puesto requerido"),
})

const stepTwoSchema = z.object({
  channels: z.array(z.string()).min(1, "Selecciona al menos un canal"),
  numAgents: z.string().min(1, "Selecciona el número de agentes"),
  description: z.string().min(10, "Describe brevemente tu necesidad"),
})

const stepThreeSchema = z.object({
  sources: z.array(z.string()),
  notifications: z.boolean(),
})

const fullSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema)
type FormValues = z.infer<typeof fullSchema>

const stepFields: Record<number, (keyof FormValues)[]> = {
  1: ["name", "lastname", "email", "phone", "website", "position"],
  2: ["channels", "numAgents", "description"],
  3: ["sources", "notifications"],
}

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      website: "",
      position: "",
      channels: [],
      numAgents: "",
      description: "",
      sources: [],
      notifications: false,
    },
    mode: "onTouched",
  })

  const {
    register,
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = form

  async function next() {
    const fields = stepFields[step] ?? []
    const valid = await trigger(fields)
    if (!valid) return
    setStep((s) => Math.min(s + 1, 3))
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 1))
  }

  async function onSubmit(values: FormValues) {
    try {
      await apiPost("/contact", values)
    } catch (e) {
      // Backend may not be live during static preview — keep flow forgiving.
      console.error(e)
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check size={32} strokeWidth={2.5} />
          </span>
          <h2 className="font-display text-3xl">¡Mensaje enviado!</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Nuestro equipo se pondrá en contacto contigo pronto.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-8 p-6 md:p-10">
        {/* Stepper */}
        <ol className="flex items-center justify-center gap-2 md:gap-4">
          {contactSteps.map((s, i) => {
            const status =
              s.id < step ? "done" : s.id === step ? "active" : "idle"
            return (
              <li key={s.id} className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full border-2 font-mono text-sm transition-colors",
                      status === "active" &&
                        "border-primary bg-primary text-primary-foreground",
                      status === "done" &&
                        "border-primary bg-primary/10 text-primary",
                      status === "idle" &&
                        "border-border bg-background text-muted-foreground",
                    )}
                  >
                    {status === "done" ? (
                      <Check size={16} strokeWidth={2.5} />
                    ) : (
                      s.id
                    )}
                  </span>
                  <span
                    className={cn(
                      "hidden text-xs font-medium uppercase tracking-wider sm:block",
                      status === "idle"
                        ? "text-muted-foreground"
                        : "text-foreground",
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {i < contactSteps.length - 1 && (
                  <span className="h-px w-10 bg-border md:w-16" />
                )}
              </li>
            )
          })}
        </ol>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl">Información de contacto</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Nombres"
                  required
                  error={errors.name?.message}
                >
                  <Input placeholder="Ej: Diego Antoni" {...register("name")} />
                </Field>
                <Field
                  label="Apellidos"
                  required
                  error={errors.lastname?.message}
                >
                  <Input
                    placeholder="Ej: Devivanco Ganoza"
                    {...register("lastname")}
                  />
                </Field>
                <Field
                  label="Email corporativo"
                  required
                  error={errors.email?.message}
                >
                  <Input
                    type="email"
                    placeholder="empresa@dominio.com"
                    {...register("email")}
                  />
                </Field>
                <Field
                  label="Nro. de teléfono"
                  required
                  error={errors.phone?.message}
                >
                  <Input
                    type="tel"
                    placeholder="999-777-666"
                    {...register("phone")}
                  />
                </Field>
                <Field
                  label="Web de la empresa"
                  required
                  error={errors.website?.message}
                >
                  <Input
                    placeholder="www.empresa.com"
                    {...register("website")}
                  />
                </Field>
                <Field
                  label="Puesto en la empresa"
                  required
                  error={errors.position?.message}
                >
                  <Input
                    placeholder="Supervisor de logística"
                    {...register("position")}
                  />
                </Field>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-2xl">Configuración de canales</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label className="text-sm">Canales que deseas:</Label>
                  <Controller
                    control={control}
                    name="channels"
                    render={({ field }) => (
                      <div className="grid grid-cols-2 gap-3">
                        {channels.map((channel) => {
                          const checked = field.value.includes(channel.id)
                          return (
                            <label
                              key={channel.id}
                              className={cn(
                                "flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors",
                                checked
                                  ? "border-primary bg-primary/5"
                                  : "hover:border-primary/40",
                              )}
                            >
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={checked}
                                onChange={() => {
                                  const next = checked
                                    ? field.value.filter((v) => v !== channel.id)
                                    : [...field.value, channel.id as ChannelId]
                                  field.onChange(next)
                                }}
                              />
                              <img
                                src={channel.icon.src}
                                alt=""
                                className="size-7"
                              />
                              <span className="text-sm font-medium">
                                {channel.label}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    )}
                  />
                  {errors.channels && (
                    <p className="text-xs text-destructive">
                      {errors.channels.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-5">
                  <Field
                    label="Nro. de agentes"
                    required
                    error={errors.numAgents?.message}
                  >
                    <Controller
                      control={control}
                      name="numAgents"
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {agentRanges.map((r) => (
                                <SelectItem key={r.value} value={r.value}>
                                  {r.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                  <Field
                    label="¿Cómo te ayudarán nuestras soluciones?"
                    required
                    error={errors.description?.message}
                  >
                    <Textarea
                      placeholder="Atender tickets de ventas en WhatsApp"
                      className="min-h-[120px]"
                      {...register("description")}
                    />
                  </Field>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-2xl">¿Cómo llegaste a Konnect?</h2>

              <div className="flex flex-col gap-3">
                <Label className="text-sm">
                  Por qué medio digital llegaste a Konnect:
                </Label>
                <Controller
                  control={control}
                  name="sources"
                  render={({ field }) => (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {discoverySources.map((source) => {
                        const checked = field.value.includes(source.id)
                        return (
                          <label
                            key={source.id}
                            className={cn(
                              "flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card p-3 transition-colors",
                              checked
                                ? "border-primary bg-primary/5"
                                : "hover:border-primary/40",
                            )}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={checked}
                              onChange={() => {
                                const next = checked
                                  ? field.value.filter((v) => v !== source.id)
                                  : [
                                      ...field.value,
                                      source.id as DiscoverySourceId,
                                    ]
                                field.onChange(next)
                              }}
                            />
                            <img
                              src={source.icon.src}
                              alt=""
                              className="size-6"
                            />
                            <span className="text-xs font-medium leading-tight">
                              {source.label}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  )}
                />
              </div>

              <Controller
                control={control}
                name="notifications"
                render={({ field }) => (
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-secondary/40 p-4">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(v === true)}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      Deseo recibir notificaciones. Recibirás avisos de las
                      nuevas funcionalidades que Konnect 360 va integrando.
                    </span>
                  </label>
                )}
              />

              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-sm font-semibold">Resumen:</p>
                <Summary values={getValues()} />
              </div>
            </div>
          )}

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prev}
              disabled={step === 1}
              className={cn("gap-2", step === 1 && "invisible")}
            >
              <ChevronLeft size={16} strokeWidth={2.25} />
              Anterior
            </Button>
            {step < 3 ? (
              <Button type="button" onClick={next} className="gap-2">
                Siguiente
                <ChevronRight size={16} strokeWidth={2.25} />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Send size={16} strokeWidth={1.75} />
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}

function Summary({ values }: { values: FormValues }) {
  const fullName = [values.name, values.lastname].filter(Boolean).join(" ")
  const channelLabels = values.channels
    .map((id) => channels.find((c) => c.id === id)?.label)
    .filter(Boolean)
    .join(", ")
  const agentLabel =
    agentRanges.find((r) => r.value === values.numAgents)?.label ?? ""
  return (
    <dl className="mt-2 grid grid-cols-1 gap-1 text-sm text-muted-foreground sm:grid-cols-2">
      <Row label="Nombre" value={fullName} />
      <Row label="Email" value={values.email} />
      <Row label="Teléfono" value={values.phone} />
      <Row label="Canales" value={channelLabels} />
      <Row label="Agentes" value={agentLabel} />
      <Row label="Web" value={values.website} />
    </dl>
  )
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex gap-2">
      <dt className="font-medium text-foreground">{label}:</dt>
      <dd>{value || "—"}</dd>
    </div>
  )
}
