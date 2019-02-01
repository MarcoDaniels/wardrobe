import * as React from 'react'
import styled from 'styled-components'

interface Props {
	onClick: any
	disabled?: boolean
	classes?: string
}

const StyledButton = styled.button<{ disabled: boolean }>`
	${props => props.disabled ? 'disabled: true' : ''};
`

export const Button: React.FunctionComponent<Props> = props => {
	const {onClick, disabled, classes, children} = props

	return (
		<StyledButton
			onClick={onClick}
			disabled={disabled ? disabled : false}
			className={classes ? classes : ''}
		>
			{children}
		</StyledButton>
	)
}
