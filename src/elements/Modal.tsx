import * as React from 'react'
import { Overlay } from './Overlay'
import styled from 'styled-components'
import { Button } from './Button'
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
	padding: 5px 10px;
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
}

interface State {
	active: boolean
}

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
						<StyledModalContent>
							{this.props.children}
						</StyledModalContent>
					</StyledModal>
				</StyledOuterModal>
			</Overlay>
		)
	}
}

export default Modal
