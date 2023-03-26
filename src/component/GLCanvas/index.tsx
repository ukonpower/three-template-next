import { useContext, useEffect, useRef } from 'react'
import styles from './glCanvas.module.scss'
import { GLContext } from '~/contexts/glContext'

const useGLCanvas = () => {
	const controller = useContext(GLContext).controller
	const wrapperElmRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (controller && wrapperElmRef.current) {
			const canvas = wrapperElmRef.current.querySelectorAll('canvas')
			canvas.forEach(item => item.remove())
			wrapperElmRef.current.appendChild(controller.canvas)
			controller.setPointerElement(controller.canvas)
		}
	}, [wrapperElmRef, controller])

	return {
		wrapperElmRef,
	}
}

export const GLCanvas: React.FC = () => {
	const { wrapperElmRef } = useGLCanvas()
	return <div className={styles.glCanvas} ref={wrapperElmRef}></div>
}
