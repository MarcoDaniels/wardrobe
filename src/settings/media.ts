import { css, ThemedCssFunction } from 'styled-components'

const sizes = {
	phone: 320,
	tablet: 768,
	desktop: 1224
}

class ThemeInterface {
}

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
	(acc, label) => {
		acc[label] = (first: any, ...interpolations: any[]) => css`
		  @media (min-width: ${sizes[label]}px) {
			${css(first, ...interpolations)}
		  }
		`

		return acc
	},
	{} as { [key in keyof typeof sizes]: ThemedCssFunction<ThemeInterface> },
)
