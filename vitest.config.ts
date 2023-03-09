import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

import viteConfig from './vite.config';


export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // 默认情况下，vitest 不显式提供全局 API。如果你更倾向于使用类似 jest 中的全局 API，可以将 --globals 选项传递给 CLI 或在配置中添加 globals: true。
      globals: true,
      environment: 'jsdom',
      // includeSource: ["tests/*.{js,jsx,ts,tsx}", "tests/**/*.{js,jsx,ts,tsx}"],
      // coverage: {
      //   reporter: ["text", "html"],
      // },
      setupFiles: ['./tests/setup.ts'],
      // you might want to disable it, if you don't have tests that rely on CSS
      // since parsing CSS is slow
      css: true,
      // 匹配包含测试文件的 glob 规则
      include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      // 匹配排除测试文件的 glob 规则
      // exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'],
      alias: [{
        find: '@',
        replacement: path.resolve(__dirname, './src'), // path.resolve(appDir, './src'),
      }],
    },
  })
);