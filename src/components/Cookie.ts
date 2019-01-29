export function setCookie(name: string, value: string, expirationDays: number) {
	const date = new Date()

	date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000))

	document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
}

export function getCookie(name: string) {
	const value = '; ' + document.cookie
	const parts = value.split('; ' + name + '=')

	if (parts.length === 2) {
		return parts.pop()!.split(';').shift()
	}

	return false
}
