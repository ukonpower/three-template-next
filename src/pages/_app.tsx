import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'

import EventEmitter from 'wolfy87-eventemitter'

import { GlobalContext } from '~/contexts/globalContext'
import { GLCanvas } from '~/component/GLCanvas'
import { GLController } from '../gl/GLController'
import { MainScene } from '../gl/MainScene'

const useApp = () => {
	const [eventEmitter, setEventEmitter] = useState<EventEmitter | null>(null)
	const [scene, setScene] = useState<MainScene | null>(null)

	useEffect(() => {
		setEventEmitter(new EventEmitter())

		const controller = new GLController()
		setScene(controller.scene)

		return () => {
			controller.dispose()
		}
	}, [])

	return { scene, eventEmitter }
}

function App({ Component, pageProps }: AppProps) {
	const { eventEmitter, scene } = useApp()
	return (
		<>
			<GlobalContext.Provider value={{ eventEmitter: eventEmitter, scene: scene }}>
				<GLCanvas />
				<Component {...pageProps} />
			</GlobalContext.Provider>
		</>
	)
}

export default App
