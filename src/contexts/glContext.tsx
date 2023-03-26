import React from 'react'
import { MainScene } from '../gl/MainScene'
import { GLController } from '~/gl/GLController'

export type GLContext = {
	controller: GLController | null
	scene: MainScene | null
}

export const GLContext = React.createContext<GLContext>({ controller: null, scene: null })
