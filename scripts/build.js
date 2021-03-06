const scripts = require('react-micro-frontend-scripts');

function build() {
  // --- ENV for 'production' only ---
  process.env.PUBLIC_DISABLE_REVISION = 'true';
  process.env.PUBLIC_ROOT_URL = '/';
  // process.env.GENERATE_SOURCEMAP = 'true';
  // process.env.INLINE_RUNTIME_CHUNK = 'true';
  // process.env.MINIMIZE_IN_PRODUCTION = 'true';

  // --- ENV for ALL ---
  process.env.ENSURE_NO_EXPORTS = 'true';
  // process.env.IMAGE_INLINE_SIZE_LIMIT = '1000';
  // process.env.REACT_MICRO_FRONTEND_SHORT = 'rmf';
  process.env.SPLIT_CHUNKS = 'false';
  process.env.RUNTIME_CHUNK = 'false';
  process.env.POSTCSS_PRESET_ENV_STAGE = '1'; // default '3'

  scripts.runWebpack(scripts.envProduction, (config) => ({
    ...config,
    externals: {
      ...scripts.helper.getExternalsOptions(),
      echarts: {
        commonjs: 'echarts',
        commonjs2: 'echarts',
        amd: 'echarts',
        root: 'echarts',
      },
    },
  }));
}

build();
