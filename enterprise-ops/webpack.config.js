const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'enterprise-ops',
  remotes: {
    reports: 'reports@http://localhost:4201/remoteEntry.js',
  },
  exposes: {
    './Component': './src/app/app.ts',
  },

  shared: {
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
     ...require('@angular-architects/module-federation/webpack').shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },

});
