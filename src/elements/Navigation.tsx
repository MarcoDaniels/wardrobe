import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { media } from '../settings/media'

interface ChildElement {
	children: React.ReactNode
}

interface NavigationProps {
	children: Array<React.ReactElement<ChildElement>>
	quickLinks?: Array<React.ReactElement<ChildElement>>
	navClasses?: string
	mainListClasses?: string
	secondListClasses?: string
}

const StyledNavContent = styled.div`
	justify-content: space-between;
	display: flex;
	max-width: 1200px;
`

const StyledNav = styled.nav`
	${media.phone`
		background-color: red;
	`};
	${media.tablet`
		background-color: blue;
	`};
	${media.desktop`
		background-color: pink;
	`};
	border-bottom: 1px solid #000;
    background-color: white;
    text-align: -webkit-center;
	position: fixed;
    z-index: 1030;
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
	const {children, quickLinks, navClasses, mainListClasses, secondListClasses} = props

	return (
		<StyledNav className={navClasses ? navClasses : ''}>
			<StyledNavContent>
				<StyledUnorderedList className={mainListClasses ? mainListClasses : ''}>
					{createListElements(children)}
				</StyledUnorderedList>
				{quickLinks && (
					<StyledUnorderedList className={secondListClasses ? secondListClasses : ''}>
						{createListElements(quickLinks)}
					</StyledUnorderedList>
				)}
			</StyledNavContent>
		</StyledNav>
	)
}

export default Navigation
