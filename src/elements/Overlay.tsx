import React from 'react'
import styled from 'styled-components'

export interface OverlayProps {
	active: boolean
}

const StyledOverlay = styled.div<{ active: boolean }>`
	display: ${props => props.active ? 'block' : 'none'};
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 1;
	background-color: rgba(211, 211, 211, 0.8);
	z-index: 1;
`

export const Overlay: React.FunctionComponent<OverlayProps> = props => {
	const {active, children} = props

	return (
		<StyledOverlay active={active}>
			{children}
		</StyledOverlay>
	)
}

export default Overlay
