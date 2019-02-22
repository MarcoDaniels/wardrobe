import * as React from 'react'
import styled from 'styled-components'

export type propTypes = {
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
    background-color: rgba(211,211,211,0.8);
    padding: 10px;
    z-index: 1;
`

export const Overlay: React.FunctionComponent<propTypes> = props => {
	const {active, children} = props

	return (
		<StyledOverlay active={active}>
			{children}
		</StyledOverlay>
	)
}

export default Overlay
