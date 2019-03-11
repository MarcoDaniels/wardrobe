import * as React from 'react'
import ModalOverlay from '../collections/ModalOverlay'
import { getCookie, setCookie } from '../functions/Cookie'
import { Button } from '../elements/Button'

interface Props {
	cookieName: string
	cookieValue: string
	expirationDays: number
}

interface State {
	accepted: boolean
}

export class CookieConsent extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			accepted: this.hasConsent()
		}
	}

	hasConsent = (): boolean => {
		const cookie = getCookie(this.props.cookieName)
		return !!cookie;
	}

	acceptConsent = (): void => {
		setCookie({
			name: this.props.cookieName,
			value: this.props.cookieValue,
			expirationDays: this.props.expirationDays
		})

		this.setState({
			accepted: this.hasConsent()
		})
	}

	render() {
		return (
			<React.Fragment>
				<ModalOverlay active={!this.state.accepted} closeButton={false}>
					{this.props.children}
					<Button onClick={this.acceptConsent}>
						accept
					</Button>
				</ModalOverlay>
			</React.Fragment>
		)
	}
}

export default CookieConsent
