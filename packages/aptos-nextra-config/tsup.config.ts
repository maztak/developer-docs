import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2020',
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.js'
    }
  }
})