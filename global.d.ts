import { GlobalManager } from "~/gl/MainScene/GlobalManager";
import { RootState } from "~/stores";

declare module 'react-redux' {
	interface DefaultRootState extends RootState {}
}

declare global {
	interface Window {
		gManager: GlobalManager;
		assetManager: AssetManager;
		isIE: boolean;
		isSP: boolean;
		mainScene: MainScene;
	}
}
