import * as React from 'react'

export interface Icon {
	name: string
	draw: string
}

interface Props {
	icon: Icon
	color: string
	size: number
	title?: string
	classes?: string
}

export const IconWrapper: React.FunctionComponent<Props> = props => {
	const { icon, color, size, title, classes } = props

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" aria-labelledby="title"
			className={classes ? classes : ''} width={size} height={size}
		>
			<title id="title">
				{title ? title : icon.name}
			</title>
			<path fill={color} d={icon.draw}/>
		</svg>
	)
}
