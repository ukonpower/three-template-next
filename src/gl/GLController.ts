import { MainScene } from './MainScene';
import * as ORE from '@ore-three';

export class GLController {

	public canvas: HTMLCanvasElement;

	public controller: ORE.Controller;
	public scene: MainScene;

	constructor() {

		/*------------------------
			init ORE
		------------------------*/

		this.controller = new ORE.Controller();

		this.scene = new MainScene( {
			name: 'Main',
		} );

		this.canvas = this.scene.renderer.domElement;

		this.controller.addLayer( this.scene );

	}

	public setPointerElement( elm: HTMLElement ) {

		this.controller.setPointerEventElement( elm );

	}

	public dispose() {

		if ( this.controller ) {

			this.controller.dispose();

		}

	}

}
