import React from 'react'
import { IconType } from './Type'

interface Props {
	icon: IconType
	color: string
	size: number
	spinning?: boolean
	title?: string
	classes?: string
}

export const Wrapper: React.FunctionComponent<Props> = props => {
	const { icon, color, size, title, classes, spinning } = props

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox} aria-labelledby="title"
			className={classes ? classes : ''} width={size} height={size}
		>
			<title id="title">
				{title ? title : icon.name}
			</title>
			<path fill={color} d={icon.draw}/>
			{spinning && (
				<animateTransform
					attributeType="xml"
					attributeName="transform"
					type="rotate"
					from="0 1 1"
					to="360 1 1"
					dur="1.5s"
					repeatCount="indefinite"
				/>
			)}
		</svg>
	)
}
