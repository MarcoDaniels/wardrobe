import * as React from 'react'
import Modal from '../collections/Modal'
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
		setCookie(this.props.cookieName, this.props.cookieValue, this.props.expirationDays)
		this.setState({
			accepted: this.hasConsent()
		})
	}

	render() {
		return (
			<React.Fragment>
				<Modal active={!this.state.accepted} closeButton={false}>
					<p>we have cookies!</p>
					<Button onClick={this.acceptConsent}>
						accept
					</Button>
				</Modal>
			</React.Fragment>
		)
	}
}

export default CookieConsent
