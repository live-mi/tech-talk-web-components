import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'web-components-stencil',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/web-components-stencil/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/web-components-stencil/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
