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
	closeButtonCallback?(): void
	contentClasses?: string
}

export const ModalOverlay: React.FunctionComponent<Props> = props => {
	const { active, closeButton, closeButtonCallback, contentClasses, children } = props

	return (
		<Overlay active={active}>
			<StyledOuterModal>
				<StyledModal>
					<StyledModalHeader>
						{closeButton && (
							<Button onClick={closeButtonCallback}>
								<IconWrapper
									icon={times}
									color={'#000'}
									size={20}
									title={'close'}
								/>
							</Button>
						)}
					</StyledModalHeader>
					<StyledModalContent className={contentClasses ? contentClasses : ''}>
						{children}
					</StyledModalContent>
				</StyledModal>
			</StyledOuterModal>
		</Overlay>
	)
}

export default ModalOverlay
