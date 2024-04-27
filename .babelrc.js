const plugins = [
  [
    ['@babel/plugin-transform-private-methods', {loose: true}],

    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        test: './test',
      },
    },
  ],
];
