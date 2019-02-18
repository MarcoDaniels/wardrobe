import * as React from 'react'
import styled from 'styled-components'
import { Overlay } from '../elements/Overlay'
import { Button } from '../elements/Button'
import { IconWrapper } from '../icons/IconWrapper'
import { times } from '../icons'

const StyledOuterModal = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const StyledModal = styled.div`
	background-color: #fff;
	padding: 10px;
	border-radius: 10px;
	width: 80%;
	height: 80%;
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

/**
 * TODO:
 * ModalContent Classes
 * Close callback
 */
export class Modal extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			active: this.props.active
		}
	}

	closeModal = () => {
		this.setState({active: false})
	}

	render() {
		return (
			<Overlay active={this.state.active}>
				<StyledOuterModal>
					<StyledModal>
						<StyledModalHeader>
							{this.props.closeButton && (
								<Button onClick={this.closeModal}>
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
				</StyledOuterModal>
			</Overlay>
		)
	}
}

export default Modal
