import * as React from 'react'
import styled from 'styled-components'
import { Overlay } from '../elements/Overlay'
import { Button } from '../elements/Button'
import { IconWrapper } from '../icons/IconWrapper'
import { times } from '../icons'
import { Modal, ModalPosition } from '../elements/Modal'

const StyledWrapper = styled.div`
	display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const StyledModal = styled.div`
	background-color: #FFFFFF;
	padding: 10px;
	border-radius: 10px;
	display: grid;
`

const StyledHeader = styled.div`
	height: 25px;
    line-height: 25px;
`

const StyledHeaderTitle = styled.div`
	float: left;
	padding-right: 20px;
`

const StyledHeaderClose = styled.div`
	float: right;
`

const StyledContent = styled.div`
	padding: 20px 5px;
`

interface Props {
	closeButton: boolean
	title: string
	classes?: string
}

interface State {
	active: boolean
}

export class ModalOverlay extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			active: true
		}
	}

	handleClose = () => {
		this.setState({
			active: false
		})
	}

	render() {
		// avoid re-render
		if (!this.state.active) { return null }

		return (
			<Overlay active={this.state.active}>
				<StyledWrapper>
					<Modal active={this.state.active} position={ModalPosition.floating}>
						<StyledModal className={this.props.classes ? this.props.classes : ''}>
							<StyledHeader>
								<StyledHeaderTitle>
									{this.props.title}
								</StyledHeaderTitle>
								{this.props.closeButton && (
									<StyledHeaderClose>
										<Button onClick={this.handleClose}>
											<IconWrapper
												icon={times}
												color={'#000'}
												size={20}
												title={'close modal'}
											/>
										</Button>
									</StyledHeaderClose>
								)}
							</StyledHeader>
							<StyledContent>
								{this.props.children}
							</StyledContent>
						</StyledModal>
					</Modal>
				</StyledWrapper>
			</Overlay>
		)
	}
}

export default ModalOverlay
