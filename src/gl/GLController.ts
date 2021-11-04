import * as ORE from '@ore-three-ts';
import { MainScene } from './MainScene';

export class GLController {

	public scene: MainScene;

	private canvas: HTMLCanvasElement | null;
	private controller?: ORE.Controller;

	constructor() {

		this.canvas = document.querySelector("#canvas");

		this.scene = new MainScene();

		/*------------------------
			init ORE
		------------------------*/

		this.controller = new ORE.Controller();
		this.controller.addLayer(this.scene, {
			name: 'Main',
			canvas: this.canvas || undefined
		});

	}

	public dispose() {

		if (this.controller) {

			this.controller.dispose();

		}

	}

}