import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React, { useEffect, useState } from 'react'

import { Provider } from 'react-redux'
import EventEmitter from 'wolfy87-eventemitter'
import { GLController } from '../gl/GLController'
import { MainScene } from '../gl/MainScene'
import { GLCanvas } from '~/component/GLCanvas'
import { GLContext } from '~/contexts/glContext'

import { useGL } from '~/hooks/useGL'
import store from '~/stores'

const useApp = () => {
	const { controller, scene } = useGL()

	return {
		controller,
		scene,
	}
}

function App({ Component, pageProps }: AppProps) {
	const { controller, scene } = useApp()
	return (
		<>
			<Provider store={store}>
				<GLContext.Provider value={{ controller, scene }}>
					<GLCanvas />
					<Component {...pageProps} />
				</GLContext.Provider>
			</Provider>
		</>
	)
}

export default App
