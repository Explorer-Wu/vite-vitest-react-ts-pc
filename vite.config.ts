import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  json: {
    //是否支持从 .json 文件中进行按名导入
    namedExports: true,
    //若设置为 true 导入的json会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
    stringify: true
  },
  css: {
		preprocessorOptions: {
			less: {
				// 支持内联 JavaScript
				javascriptEnabled: true, //注意，这一句是在less对象中，写在外边不起作用
				// modifyVars:{ //在这里进行主题的修改，参考官方配置属性 // modifyVars: themeVariables,
				//   '@primary-color': '#1DA57A',
				// },
			},
			sass: { charset: false },
			scss: {
				charset: false,
				/** 引入var.scss全局预定义变量 */
				additionalData:
					'@import "@/assets/styles/main/normalize.scss";@import "@/assets/styles/main/function.scss";',
			},
		},
		postcss: {
			plugins: [
				{
					postcssPlugin: 'internal:charset-removal',
					AtRule: {
						charset: atRule => {
							if (atRule.name === 'charset') {
								atRule.remove();
							}
						},
					},
				},
			],
		},
		modules: {
			localsConvention: 'camelCase',
		},
	},
	resolve: {
		extensions: [
			'.mjs',
			'.js',
			'.ts',
			'.jsx',
			'.tsx',
			'.json',
			'.css',
			'.scss',
			'.less',
			'.png',
			'.jpg',
			'.jpeg',
			'.gif',
			'.svg',
		], // '.wasm',
		alias: [{
			find: '@',
      replacement: path.resolve(__dirname, './src'), // path.resolve(appDir, './src'),
		}],
	},
})
