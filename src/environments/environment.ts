// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  lATEST_UPADATE_API: 'https://api.rootnet.in/covid19-in/stats/latest',
  hISTORY_API: 'https://api.rootnet.in/covid19-in/stats/history',
  NOTIFICATION_API: 'https://api.rootnet.in/covid19-in/notifications',
  CONSTACT_API: 'https://api.rootnet.in/covid19-in/contacts',
  HOSPITAL_AND_API: 'https://api.steinhq.com/v1/storages/5e732accb88d3d04ae0815ae/StateWiseHealthCapacity',
  TESTING_API: ' https://api.steinhq.com/v1/storages/5e6e3e9fb88d3d04ae08158c/ICMRTestData',
  MEDICAL_COLLEGE_API: ' https://api.steinhq.com/v1/storages/5e6e3e9fb88d3d04ae08158c/Hospitals',
  RAW_API: 'https://api.rootnet.in/covid19-in/stats/testing/raw',
  GLOBAL_API: "https://coronavirus-19-api.herokuapp.com/all",
  ALL_COUNTRIES_API: " https://coronavirus-19-api.herokuapp.com/countries",
  INDIADATA_API: 'https://coronavirus-19-api.herokuapp.com/countries/india',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
