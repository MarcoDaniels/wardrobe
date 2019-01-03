import * as React from 'react'
import { mount } from 'enzyme'

import { Link } from '../Link'

describe('Link component', () => {
    it('should render link with props and data', () => {
        const component = mount(
            <Link link={'marcodaniels.com'} isActive={false} classes={'class1'}>
                link text
            </Link>
        )

        expect(component.prop('isActive')).toBe(false)

        const element = component.find('a')

        expect(element.text()).toBe('link text')
        expect(element.prop('href')).toBe('marcodaniels.com')
        expect(element.hasClass('class1')).toBeTruthy()
    })

    it('should render link with props and data in new tab', () => {
        const component = mount(
            <Link link={'marcodaniels.com'} isActive={true} classes={'class2'} newTab={true}>
                link text
            </Link>
        )

        expect(component.prop('isActive')).toBe(true)

        const element = component.find('a')

        expect(element.text()).toBe('link text')
        expect(element.prop('target')).toBe('_blank')
        expect(element.prop('rel')).toBe('noopener noreferrer')
        expect(element.hasClass('class2')).toBeTruthy()
    })
})
