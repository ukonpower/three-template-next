import * as ORE from '@ore-three';
import { MainScene } from './MainScene';

export class GLController {

	public scene: MainScene;

	private canvas: HTMLCanvasElement | null;
	private controller?: ORE.Controller;

	constructor() {

		this.canvas = document.querySelector("#canvas");

		this.scene = new MainScene({
			name: 'Main',
			canvas: this.canvas || undefined
		});

		/*------------------------
			init ORE
		------------------------*/

		this.controller = new ORE.Controller();
		this.controller.addLayer(this.scene);

	}

	public dispose() {

		if (this.controller) {

			this.controller.dispose();

		}

	}

}