/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.module.rules.push(
    	// {
		// 	test: /\.ts$/,
		// 	exclude: /node_modules/,
		// 	use: 'ts-loader'
		// },
		{
			test: /\.(vs|fs|glsl)$/,
			exclude: /node_modules/,
			use: [
				'raw-loader',
				{
					loader: 'glslify-loader',
					options: {
					transform: [
						['glslify-hex'],
						['glslify-import']
					],
					basedir: './src/libs/glsl-chunks'
					}
				}
			]
		}
    );
    
    return config
  }
}
