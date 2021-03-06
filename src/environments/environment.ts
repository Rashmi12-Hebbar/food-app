// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const BASE_URL ='http://localhost:9090/';

export const environment = {
  production: false,
  

  apiPostUser :`${BASE_URL}api/adduser`,
  apiPostToken : `${BASE_URL}token/generate-token`,
  apiPostCard : `${BASE_URL}api/checkcardname`,
  apiGetRestuarants:`${BASE_URL}api/getRestaurants`,
  apiPostRestuarants:`${BASE_URL}api/addrestaurants`,
  apiPutResturants:`${BASE_URL}api/updateRestaurants`,
  apiDeleteResturants:`${BASE_URL}api/deleteRestaurants/`
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
