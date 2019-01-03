import * as React from 'react'
import styled from 'styled-components'

interface Props {
    link: string
    isActive: boolean
    newTab?: boolean
    classes?: string
}

const StyledLink = styled.a<{ isActive: boolean }>`
    color: ${props => props.isActive ? 'red' : 'blue'};
`

export const Link: React.FunctionComponent<Props> = props => {
    const {children, isActive, link, classes, newTab} = props

    if (newTab) {
        return (
            <StyledLink
                href={link} isActive={isActive} className={classes}
                target={'_blank'} rel={'noopener noreferrer'}
            >
                {children}
            </StyledLink>
        )
    }

    return (
        <StyledLink href={link} isActive={isActive} className={classes} >
            {children}
        </StyledLink>
    )
}
