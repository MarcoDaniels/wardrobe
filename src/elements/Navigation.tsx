import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ChildElement {
	children: React.ReactNode
}

interface NavigationProps {
	children: Array<React.ReactElement<ChildElement>>
	quickLinks?: Array<React.ReactElement<ChildElement>>
	navClasses?: string
	listClasses?: string
	quickLinksClasses?: string
}

const StyledNavContent = styled.div`
	justify-content: space-between;
	display: flex;
	max-width: 1200px;
`

const StyledNav = styled.nav`
	border-bottom: 1px solid #000;
    background-color: white;
    
    text-align: -webkit-center;
	position: fixed;
    right: 0;
    left: 0;
	top: 0;
`

const StyledUnorderedList = styled.ul`
	list-style: none;
	padding-inline-start: 0;
`

const StyledListItem = styled.li`
	display: inline; 
	
	> a {
		padding: 15px 10px;
	}
`

function createListElements(children: Array<React.ReactElement<ChildElement>>) {
	return React.Children.map(
		children,
		(child: React.ReactElement<ChildElement>) => (
			<StyledListItem>{child}</StyledListItem>
		))
}

export const Navigation: FunctionComponent<NavigationProps> = props => {
	const {children, quickLinks, navClasses, listClasses, quickLinksClasses} = props

	return (
		<StyledNav className={navClasses ? navClasses : ''}>
			<StyledNavContent>
				<StyledUnorderedList className={listClasses ? listClasses : ''}>
					{createListElements(children)}
				</StyledUnorderedList>
				{quickLinks && (
					<StyledUnorderedList className={quickLinksClasses ? quickLinksClasses : ''}>
						{createListElements(quickLinks)}
					</StyledUnorderedList>
				)}
			</StyledNavContent>
		</StyledNav>
	)
}

export default Navigation
