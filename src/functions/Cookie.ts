export interface CookieType {
	name: string
	value: string
	expirationDays: number
}

export function setCookie(cookie: CookieType) {
	const date = new Date()

	date.setTime(date.getTime() + (cookie.expirationDays * 24 * 60 * 60 * 1000))

	document.cookie = cookie.name + '=' + cookie.value + '; expires=' + date.toUTCString() + '; path=/'
}

export function getCookie(name: string) {
	const value = '; ' + document.cookie
	const parts = value.split('; ' + name + '=')

	if (parts.length === 2) {
		return parts.pop()!.split(';').shift()
	}

	return false
}
