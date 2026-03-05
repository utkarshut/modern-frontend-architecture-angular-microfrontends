const { withModuleFederationPlugin, shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'reports',

  exposes: {
    './ReportsEntry': './src/app/reports-entry/reports-entry.ts',
    './RemoteInfo': './src/app/remote-info.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});