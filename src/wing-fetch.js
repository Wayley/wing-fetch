const requestInterceptor = [
  (configs) => configs,
  (error) => Promise.reject(error),
];
const responseInterceptor = [
  (response) => response,
  (error) => Promise.reject(error),
];

const defaultOptions = {
  baseUrl: '',
  interceptors: { request: requestInterceptor, response: responseInterceptor },
};

const assign = Object.assign;

export function WingFetch(options) {
  this.options = assign(defaultOptions, options || {});
}
WingFetch.prototype.request = function ({ url, method }) {};

export default WingFetch;
