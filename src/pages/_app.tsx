import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React, { useEffect, useState } from 'react'

import { Provider, useSelector } from 'react-redux'
import EventEmitter from 'wolfy87-eventemitter'

import { GLController } from '../gl/GLController'
import { MainScene } from '../gl/MainScene'
import { GLCanvas } from '~/component/GLCanvas'
import { GlobalContext } from '~/contexts/globalContext'
import store from '~/stores'

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
			<Provider store={store}>
				<GlobalContext.Provider value={{ eventEmitter: eventEmitter, scene: scene }}>
					<GLCanvas />
					<Component {...pageProps} />
				</GlobalContext.Provider>
			</Provider>
		</>
	)
}

export default App
