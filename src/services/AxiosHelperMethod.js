export const requestIntercepter = config => {
  const accessToken = '';
  if (accessToken != null) {
    config.headers['x-auth'] = accessToken;
  }

  console.log('Headers', config.headers);
  console.log('Methods', config.method);
  console.log('URL', config.baseURL + config.url);
  return config;
};

// const callRefreshTokenAPI = () => {
//   return new instance of ActionSheetIOS...
// };
export const responseInterceptor = config => {
  console.log('Request....');
  console.log('Headers', config.config.headers);
  console.log('Methods', config.config.method);
  console.log('URL', config.config.baseURL + config.config.url);
  return config;
};

export const responseErrorHandler = error => {
  const originalConfig = error.config;
  if (error?.response?.status === 401 && !originalConfig._retry) {
    console.log(
      'Unauthorized request... request for new refresh token..',
      error?.response?.data?.message,
    );
    ///return call refresh token
  }
  // alert('RESPONSE ERROR', error);
  return Promise.reject(error);
};

export const requestErrorHandler = error => {
  return Promise.reject(error);
};
