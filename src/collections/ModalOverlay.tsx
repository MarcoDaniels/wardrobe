import * as React from 'react'
import styled from 'styled-components'
import { Overlay } from '../elements/Overlay'
import { Button } from '../elements/Button'
import { IconWrapper } from '../icons/IconWrapper'
import { times } from '../icons'
import { Modal, ModalPosition } from '../elements/Modal'

const StyledOuterModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 80%;
	height: 80%;
`

const StyledModal = styled.div`
	background-color: #fff;
	padding: 10px;
	border-radius: 10px;
`

const StyledModalHeader = styled.div`
	float: right;
`

const StyledModalContent = styled.div`
	float: left;
	width: 100%;
`

interface Props {
	active: boolean
	closeButton: boolean
	contentClasses?: string
}

interface State {
	active: boolean
}

export class ModalOverlay extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			active: this.props.active
		}
	}

	handleClose = () => {
		this.setState({
			active: false
		})
	}

	render() {
		return (
			<Overlay active={this.state.active}>
				<StyledOuterModal>
					<Modal active={this.state.active} position={ModalPosition.floating}>
						<StyledModal>
							<StyledModalHeader>
								{this.props.closeButton && (
									<Button onClick={this.handleClose}>
										<IconWrapper
											icon={times}
											color={'#000'}
											size={20}
											title={'close'}
										/>
									</Button>
								)}
							</StyledModalHeader>
							<StyledModalContent className={this.props.contentClasses ? this.props.contentClasses : ''}>
								{this.props.children}
							</StyledModalContent>
						</StyledModal>
					</Modal>
				</StyledOuterModal>
			</Overlay>
		)
	}
}

export default ModalOverlay
