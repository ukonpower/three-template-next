import * as ORE from '@ore-three-ts';
import * as THREE from 'three';
import { GlobalManager } from './GlobalManager';
import { RenderPipeline } from './RenderPipeline';
import { CameraController } from './CameraController';
import { AssetManager } from './GlobalManager/AssetManager';

import fragVert from './shaders/frag.vs';
import fragFrag from './shaders/frag.fs';

export class MainScene extends ORE.BaseLayer {

	private gManager?: GlobalManager;
	private renderPipeline?: RenderPipeline;
	private cameraController?: CameraController;

	constructor() {

		super();

		this.commonUniforms = ORE.UniformsLib.mergeUniforms( this.commonUniforms, {} );

	}

	onBind( info: ORE.LayerInfo ) {

		super.onBind( info );

		this.gManager = new GlobalManager( {
			assets: [
				{ name: 'scene', path: '/scene/scene.glb', type: 'gltf' }
			]
		} );

		this.gManager.assetManager.addEventListener( 'loadMustAssets', ( e ) => {

			const gltf = ( e.target as AssetManager ).getGltf( 'scene' );

			if ( gltf ) {

				this.scene.add( gltf.scene );

			}

			this.initScene();
			this.onResize();

		} );

	}

	private initScene() {

		if ( this.renderer ) {

			this.renderPipeline = new RenderPipeline( this.renderer, this.commonUniforms );

		}

		this.cameraController = new CameraController( this.camera, this.scene.getObjectByName( 'CameraData' ) );

		const light = new THREE.DirectionalLight();
		light.intensity = 0.8;
		light.position.set( 1, 2, 1 );
		this.scene.add( light );

	}

	public animate( deltaTime: number ) {

		if( this.gManager ) {

			this.gManager.animator.update( deltaTime );
			
		}
		
		if ( this.cameraController ) {

			this.cameraController.update( deltaTime );

		}

		if ( this.renderPipeline ) {

			this.renderPipeline.render( this.scene, this.camera );

		}

	}

	public onResize() {

		super.onResize();

		if ( this.renderPipeline ) {

			this.renderPipeline.resize( this.info.size.canvasPixelSize );

		}

	}

	public onHover( args: ORE.TouchEventArgs ) {

		if ( this.cameraController ) {

			this.cameraController.updateCursor( args.normalizedPosition );

		}

	}

}
