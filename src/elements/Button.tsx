import * as React from 'react'
import styled from 'styled-components'

interface Props {
	onClick: any
	classes?: string
}

const StyledButton = styled.button`
	color: blue
`

export const Button: React.FunctionComponent<Props> = props => {
	const {children, onClick, classes} = props

	return (
		<StyledButton
			onClick={onClick}
			className={classes ? classes : ''}
		>
			{children}
		</StyledButton>
	)
}
