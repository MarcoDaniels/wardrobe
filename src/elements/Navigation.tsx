import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ChildElement {
	children: React.ReactNode
}

interface NavigationProps {
	children: Array<React.ReactElement<ChildElement>>
	quickLinks?: Array<React.ReactElement<ChildElement>>
}

const StyledUnorderedList = styled.ul`
	list-style: none;
	padding-inline-start: 0;
`

const StyledListItem = styled.li`
	display: inline;
	padding: 0 10px;
`

function createListElements(children: Array<React.ReactElement<ChildElement>>) {
	return React.Children.map(
		children,
		(child: React.ReactElement<ChildElement>) => (
			<StyledListItem>{child}</StyledListItem>
		))
}

export const Navigation: FunctionComponent<NavigationProps> = props => {
	return (
		<nav>
			<StyledUnorderedList>
				{createListElements(props.children)}
			</StyledUnorderedList>
			{props.quickLinks && (
				<StyledUnorderedList>
					{createListElements(props.quickLinks)}
				</StyledUnorderedList>
			)}
		</nav>
	)
}

export default Navigation
