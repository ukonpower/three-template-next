import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '~/contexts/globalContext'

import styles from './glCanvas.module.scss'

const useGLCanvas = () => {
	const scene = useContext(GlobalContext).scene
	const wrapperElmRef = useRef<HTMLDivElement | null>(null)

	const appendCanvas = (renderer: THREE.WebGLRenderer) => {
		if (wrapperElmRef.current) {
			wrapperElmRef.current.appendChild(renderer.domElement)
		}
	}

	useEffect(() => {
		if (scene && wrapperElmRef.current) {
			if (scene.renderer) {
				appendCanvas(scene.renderer)
			} else {
				scene.addEventListener('createdRenderer', e => {
					appendCanvas(e.renderer)
				})
			}
		}
	}, [wrapperElmRef, scene])

	return {
		wrapperElmRef,
	}
}

export const GLCanvas: React.FC = () => {
	const { wrapperElmRef } = useGLCanvas()
	return <div className={styles.glCanvas} ref={wrapperElmRef}></div>
}
