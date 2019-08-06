import React from 'react'
import styled from 'styled-components'

interface Props {
	active: boolean
	position: ModalPosition
	classes?: string
}

export enum ModalPosition {
	top = 'top: 0; right: 0; left: 0;',
	topLeft = 'top: 0; left: 0;',
	topRight = 'top: 0; right: 0;',
	bottom = 'bottom: 0; right: 0; left: 0;',
	bottomLeft = 'bottom: 0; left: 0;',
	bottomRight = 'bottom: 0; right: 0;',
	floating = ''
}

const StyledModal = styled.div<{ active: boolean, position: ModalPosition }>`
	display: ${props => props.active ? 'block' : 'none'};
	${props => props.position};
	padding: 10px;
	position: fixed;
	z-index: 1;
`

export const Modal: React.FunctionComponent<Props> = props => {
	const {active, position, classes, children} = props

	return (
		<StyledModal
			active={active}
			position={position}
			className={classes ? classes : ''}
		>
			{children}
		</StyledModal>
	)
}

export default Modal
