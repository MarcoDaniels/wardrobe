import * as React from 'react'

interface Props {
	href: string
	classes?: string
	openNewTab?: boolean
}

export const Link: React.FunctionComponent<Props> = props => {
	const {href, classes, openNewTab, children} = props

	if (openNewTab) {
		return (
			<a
				href={href}
				className={classes ? classes : ''}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				{children}
			</a>
		)
	}

	return (
		<a href={href} className={classes ? classes : ''}>
			{children}
		</a>
	)
}

export default Link
