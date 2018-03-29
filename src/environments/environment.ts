// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCq69qXlj5uDKn2HZdZP34plTiF-4BPz_w',
    authDomain: 'salon-2018.firebaseapp.com',
    databaseURL: 'https://salon-2018.firebaseio.com',
    projectId: 'salon-2018',
    storageBucket: '',
    messagingSenderId: '482414062889'
  },
  secret: '!l0ve!nd!@',
  database: 'mongodb://admin:admin@ds249718.mlab.com:49718/ecommerce',
  authRules: [
      {
          'name': 'allow all',
          'path': '*',
          'permission': 'allow',
          'errorcode': 0
      },
      {
          'name': 'deny specific',
          'path': 'dashboard',
          'permission': 'deny',
          'errorcode': 401
      }
  ]
};
