import * as React from 'react'
import styled from 'styled-components'

interface Props {
	active: boolean
	position: ModalPosition
	border: ModalBorder
	borderColor?: string
	borderRadius?: number
	classes?: string
}

export enum ModalPosition {
	top = 'top: 0; right: 0; left: 0;',
	topLeft = 'top: 0; left: 0;',
	topRight = 'top: 0; right: 0;',
	bottom = 'bottom: 0; right: 0; left: 0;',
	bottomLeft = 'bottom: 0; left: 0;',
	bottomRight = 'bottom: 0; right: 0;'
}

export enum ModalBorder {
	none = 'border: none',
	top = 'border-top: 1px solid;',
	bottom = 'border-bottom: 1px solid;',
	left = 'border-left: 1px solid;',
	right = 'border-right: 1px solid;',
	all = 'border: 1px solid;'
}

const StyledModal = styled.div<{
	active: boolean,
	position: ModalPosition,
	border: ModalBorder,
	borderColor?: string,
	borderRadius?: number
}>`
	display: ${props => props.active ? 'block' : 'none'};
	${props => props.position};
	${props => props.border};
	border-color: ${props => props.borderColor ? props.borderColor : '#000'};
	border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
	background-color: #fff;
	padding: 10px;
	position: fixed;
	z-index: 1;
`

export const Modal: React.FunctionComponent<Props> = props => {
	const {active, position, border, borderColor, borderRadius, classes, children} = props

	return (
		<StyledModal
			active={active}
			position={position}
			border={border}
			borderColor={borderColor}
			borderRadius={borderRadius}
			className={classes ? classes : ''}
		>
			{children}
		</StyledModal>
	)
}

export default Modal
