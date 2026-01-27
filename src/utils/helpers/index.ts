/**
 * Obtneer el dominio actual
 * @returns
 */
export function getParseDomain(value: string) {
	let domain = value ? value : (window.location.hostname ?? null);
	if (!domain) return console.warn("domain dont exist");
	let [_domain] = domain.split(".");

	if (_domain.includes("-")) {
		_domain = _domain.includes("-") ? _domain.split("-")[0] : null;
	}

	if (!_domain) return console.warn("domain dont exist");
	return _domain;
}
