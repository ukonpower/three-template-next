import { useEffect, useState } from 'react'
import { GLController } from '~/gl/GLController'
import { MainScene } from '~/gl/MainScene'

export const useGL = () => {
	const [controller, setController] = useState<GLController | null>(null)
	const [scene, setScene] = useState<MainScene | null>(null)

	useEffect(() => {
		const controller = new GLController()
		setController(controller)
		setScene(controller.scene)

		return () => {
			controller.dispose()
		}
	}, [])

	return { controller, scene }
}
