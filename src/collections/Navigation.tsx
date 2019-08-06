import React, { Children, FC, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { Wrapper } from '../icons/Wrapper'
import { burger } from '../icons/data/Directions'

interface ChildElement {
	children: ReactNode
}

interface NavigationProps {
	expand: boolean
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
`

const NavHeader = styled.div`
	float: left;
`

const NavContent = styled.div<{show: boolean}>`
	display: ${props => props.show ? 'block' : 'none'};
	margin-top: 51px;
	padding-bottom: 5px;
	background-color: white;
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

const ListItems = styled(BaseListItem)`
	padding: 15px 10px;
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
`

function createListElements({children, onClick}: ListElements) {
	return Children.map(
		children,
		(child: ReactElement<ChildElement>) => (
			<ListItems onClick={onClick}>{child}</ListItems>
		))
}

export const Navigation: FC<NavigationProps> = ({expand, brandLink, children}) => {
	// const [drawerOpen, showDrawer] = useState(false)

	const closeDrawer = () => {
		console.log('clicked')
		// if (drawerOpen) {
		// showDrawer(false)
		// }
	}

	return (
		<>
			<Nav>
				<NavWrapper>
					<NavHeader>
						<BaseList>
							<ListItems onClick={closeDrawer}>
								{brandLink}
							</ListItems>
						</BaseList>
					</NavHeader>
					<ExpandButton onClick={() => console.log('show it')}>
						<Wrapper icon={burger} color={'#000'} size={17}/>
					</ExpandButton>
					<NavContent show={expand}>
						<BaseList>
							{createListElements({children, onClick: closeDrawer})}
						</BaseList>
					</NavContent>
				</NavWrapper>
			</Nav>
		</>
	)
}

export default Navigation
