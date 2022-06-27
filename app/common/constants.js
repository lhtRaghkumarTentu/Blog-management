const stringConstants = {
  SERVICE_STATUS_HTML:
  '<body style="font-family: Helvetica !important; background-color: black">' +
  '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important; color: #605DFF !important;">' +
  '⚡  Blog  🔋 Service is working fine</div></body>'
}
const httpConstants = {
METHOD_TYPE: {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH'
},
HEADER_TYPE: {
  URL_ENCODED: 'application/x-www-form-urlencoded',
  APPLICATION_JSON: 'application/json'
},
RESPONSE_STATUS: {
  SUCCESS: true,
  FAILURE: false
},
RESPONSE_CODES: {
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  NOT_FOUND: 404,
  OK: 200,
  NO_CONTENT_FOUND: 204,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  GONE: 410,
  UNSUPPORTED_MEDIA_TYPE: 415,
  TOO_MANY_REQUEST: 429
},
LOG_LEVEL_TYPE: {
  INFO: 'info',
  ERROR: 'error',
  WARN: 'warn',
  VERBOSE: 'verbose',
  DEBUG: 'debug',
  SILLY: 'silly',
  FUNCTIONAL: 'functional',
  HTTP_REQUEST: 'http request'
},
}
const apiSuccessMessage = {
FETCH_SUCCESS: 'Information fetched successfully',

BLOG_CREATE_SUCCESS: "Blog Created Successfully",
BLOG_UPDATE_SUCCESS: "Blog updated Successfully",
BLOG_DELETE_SUCCESS: "Blog deleted Successfully",
}
const apiFailureMessage = {
FETCH_FAIL: 'Failed To fetch Information',
INTERNAL_SERVER_ERROR: 'Internal Server Error',
CREATE_BLOG_FAIL: 'unable To Create blog',
GET_BLOG_FAIL: 'unable To Get blog List',
UPDATE_BLOG_FAIL: 'unable To update blog',
DELETE_BLOG_FAIL: 'unable To delete blog',
}


module.exports.apiFailureMessage = apiFailureMessage;
module.exports.apiSuccessMessage = apiSuccessMessage;
module.exports.stringConstants = stringConstants;
module.exports.httpConstants = httpConstants;

