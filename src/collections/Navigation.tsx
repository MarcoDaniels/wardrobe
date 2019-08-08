import React, { Children, FC, ReactElement, ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import { Wrapper } from '../icons/Wrapper'
import { burger, cross } from '../icons/data/Directions'
import { media } from '../settings/media'
import { Overlay } from '../elements/Overlay'

interface ChildElement {
	children: ReactNode
}

interface NavigationProps {
	brandLink: ReactNode
	children: Array<ReactElement<ChildElement>>
}

interface ListElements {
	children: Array<ReactElement<ChildElement>>

	onClick(): void
}

const Nav = styled.nav`
	z-index: 2;
  	border-bottom: 1px solid #000;
	background-color: white;
	text-align: -webkit-center;
	position: fixed;
	height: 50px;
	right: 0;
	left: 0;
	top: 0;
`

const NavWrapper = styled.div`
	max-width: 1200px;
    margin: auto;
    display: contents;
    ${media.tablet`
		display: block;
	`};
`

const NavHeader = styled.div`
	float: left;
`

const NavContent = styled.div<{ show: boolean }>`
	display: none;
	margin-top: 51px;
	padding-bottom: 5px;
	background-color: white;
	${props => props.show && css`display: block;`};
	${media.tablet`
		margin-top: 0;
	 	background-color: transparent;
		justify-content: space-between;
		display: flex;
		padding-top: 15px;
	`};
`

const BaseList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

const BaseListItem = styled.li`
	margin: 0;
	padding: 0;
`

const BrandListItem = styled(BaseListItem)`
	padding: 15px 10px;
`

const ListItems = styled(BrandListItem)`
	${media.tablet`
		display: inline;
	`};
`

const ExpandButton = styled.button`
	position: relative;
	float: right;
	top: 10px;
	right: 16px;
	padding: 4px 6px 2px;
	border-radius: 6px;
	border-color: #000000;
	background-color: #ffffff;
	${media.tablet`
		display: none;
	`};
`

function createListElements({children, onClick}: ListElements) {
	return Children.map(
		children,
		(child: ReactElement<ChildElement>) => (
			<ListItems onClick={onClick}>{child}</ListItems>
		))
}

export const Navigation: FC<NavigationProps> = ({brandLink, children}) => {
	const [drawerOpen, showDrawer] = useState(false)

	const closeDrawer = () => {
		if (drawerOpen) {
			showDrawer(false)
		}
	}

	return (
		<>
			<Nav>
				<NavWrapper>
					<NavHeader>
						<BaseList>
							<BrandListItem onClick={closeDrawer}>
								{brandLink}
							</BrandListItem>
						</BaseList>
					</NavHeader>
					<ExpandButton onClick={() => showDrawer(!drawerOpen)}>
						<Wrapper icon={drawerOpen ? cross : burger} color={'#000'} size={17}/>
					</ExpandButton>
					<NavContent show={drawerOpen}>
						<BaseList>
							{createListElements({children, onClick: closeDrawer})}
						</BaseList>
					</NavContent>
				</NavWrapper>
			</Nav>
			<Overlay active={drawerOpen}/>
		</>
	)
}

export default Navigation
