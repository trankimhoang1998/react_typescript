const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@primary-color': '#1890ff',
            '@link-color': '#1890ff',
            '@border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
