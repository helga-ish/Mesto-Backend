const http2 = require('http2');

const BAD_REQUEST_ERROR = http2.constants.HTTP_STATUS_BAD_REQUEST; // 400
const NOT_FOUND_ERROR = http2.constants.HTTP_STATUS_NOT_FOUND; // 404
const DEFAULT_ERROR = http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
const UNAUTHORIZED_ERROR = http2.constants.HTTP_STATUS_UNAUTHORIZED; // 401
const FORBIDDEN_ERROR = http2.constants.HTTP_STATUS_FORBIDDEN; // 403
const CONFLICT_ERROR = http2.constants.HTTP_STATUS_CONFLICT; // 409

module.exports = {
  BAD_REQUEST_ERROR,
  NOT_FOUND_ERROR,
  DEFAULT_ERROR,
  UNAUTHORIZED_ERROR,
  FORBIDDEN_ERROR,
  CONFLICT_ERROR,
};
