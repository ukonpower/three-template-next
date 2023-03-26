import { useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './glCanvas.module.scss'
import { GlobalContext } from '~/contexts/globalContext'


const useGLCanvas = () => {
	const scene = useContext(GlobalContext).scene
	const wrapperElmRef = useRef<HTMLDivElement | null>(null)

	const appendCanvas = (renderer: THREE.WebGLRenderer) => {
		if (wrapperElmRef.current) {
			const canvas = wrapperElmRef.current.querySelectorAll('canvas')
			canvas.forEach(item => item.remove())

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
