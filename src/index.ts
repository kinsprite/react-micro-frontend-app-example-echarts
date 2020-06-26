// import React from 'react';

import { registerApp } from 'react-micro-frontend-framework';

import ExampleEcharts from './ExampleEcharts';

registerApp('app-example-echarts', {
  components: { default: ExampleEcharts },
});
