import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from 'app';

export const render = (url: string, opts: RenderToPipeableStreamOptions) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );
  return stream;
};
