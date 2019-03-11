import * as React from 'react'
import styled from 'styled-components'

export enum Position {
	topLeft = 'top: 0; left: 0;',
	bottomLeft = 'bottom: 0; left: 0;',
	bottomRight = 'bottom: 0; right: 0;',
	topRight = 'top: 0; right: 0;'
}

interface Props {
	position: Position
}

const StyledModal = styled.div<{ position: Position }>`
	${props => props.position ? props.position : ''};
	background-color: #fff;
	border: 1px solid #000;
	position: fixed;
	z-index: 1;
`

export const Modal: React.FunctionComponent<Props> = props => {
	const {position, children} = props

	return (
		<StyledModal position={position}>
			{children}
		</StyledModal>
	)
}

export default Modal
