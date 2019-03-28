import * as React from 'react'
import styled from 'styled-components'

interface Props {
	onClick: React.MouseEventHandler
	disabled?: boolean
	classes?: string
}

const StyledButton = styled.button<{ disabled: boolean, classes: boolean }>`
	${props => props.disabled ? 'disabled: true' : ''};
    display: flex;
    cursor: pointer;
    ${props => !props.classes && `
    border-color: #000;
    border-radius: 5px;
    `}
`

export const Button: React.FunctionComponent<Props> = props => {
	const {onClick, disabled, classes, children} = props

	return (
		<StyledButton
			onClick={onClick}
			disabled={disabled ? disabled : false}
			className={classes ? classes : ''}
			classes={!!classes}
		>
			{children}
		</StyledButton>
	)
}

export default Button
