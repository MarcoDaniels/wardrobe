import { Link, Button, Overlay, Modal, ModalPosition } from '../index'

describe('Elements exports', () => {
	it('should verify all exports', () => {
		expect(Button).toBeDefined()
		expect(Link).toBeDefined()
		expect(Overlay).toBeDefined()
		expect(Modal).toBeDefined()
		expect(ModalPosition).toBeDefined()
	})
})
