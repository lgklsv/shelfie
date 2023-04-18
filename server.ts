import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const bootstrapServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let template = fs.readFileSync(
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          'index.html'
        ),
        'utf-8'
      );
      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const html = template.split('<!--ssr-outlet-->');

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onShellError(err: Error) {
          console.error(err);
        },
        onAllReady() {
          res.write(html[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        vite.ssrFixStacktrace(err);
        next(err);
      }
    }
  });

  app.listen(5173, () =>
    console.log('Server is up and running on: http://localhost:5173/')
  );
};

bootstrapServer();
