import * as React from 'react'
import styled from 'styled-components'

interface Props {
	onClick: any
	disabled?: boolean
	classes?: string
	classesOverride?: boolean
}

const StyledButton = styled.button<{ disabled: boolean, classesOverride: boolean }>`
	${props => props.disabled ? 'disabled: true' : ''};
    display: flex;
    cursor: pointer;
    ${props => !props.classesOverride && `
    border-color: #000;
    border-radius: 5px;
    `}
`

export const Button: React.FunctionComponent<Props> = props => {
	const {onClick, disabled, classes, classesOverride, children} = props

	return (
		<StyledButton
			onClick={onClick}
			disabled={disabled ? disabled : false}
			className={classes ? classes : ''}
			classesOverride={classesOverride ? classesOverride : false}
		>
			{children}
		</StyledButton>
	)
}
