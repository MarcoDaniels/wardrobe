import * as React from 'react'
import styled from 'styled-components'

export type propTypes = {
	show: boolean
}

const StyledModal = styled.div`
	position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    background-color: rgba(255,255,255,0.5);
    padding: 10px;
    z-index: 1;
`

export const Overlay: React.FunctionComponent<propTypes> = props =>  {
	const {show, children} = props

	if (!show) {
		return null
	}

	return (
		<StyledModal>
			{children}
		</StyledModal>
	)
}
