import React from 'react'
import EventEmitter from 'wolfy87-eventemitter'
import { MainScene } from '../gl/MainScene'

export type GlobalContext = {
	eventEmitter: EventEmitter | null
	scene: MainScene | null
}

export const GlobalContext = React.createContext<GlobalContext>({ eventEmitter: null, scene: null })
