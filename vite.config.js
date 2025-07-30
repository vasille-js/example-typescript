import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import { transform } from 'esbuild';

export default defineConfig({
  esbuild: false,
  plugins: [
    babel({
      loader: "js",
      filter: /\.[jt]sx?$/
    }),
      ... process.env.NODE_ENV === "production" ? [compress()] : [],
  ],
})

function compress () {
  return {
    name: 'minifyEs',
    renderChunk: {
      order: 'post',
      async handler(code, chunk, outputOptions) {
        if (outputOptions.format === 'es' && chunk.fileName.endsWith('.js')) {
          return await transform(code, { minify: true });
        }
        return code;
      },
    },
  };
}
