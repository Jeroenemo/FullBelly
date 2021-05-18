export const refreshTokenSetup = (response) => {
  let refreshTiming = (response.tokenObj.expires_in || 3600 -5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthResponse = await response.reloadAuthResponse();
    refreshTiming = (newAuthResponse.expires_in || 3600 -5 * 60) * 1000;
    console.log('new auth Token', newAuthResponse.id_token);
    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};