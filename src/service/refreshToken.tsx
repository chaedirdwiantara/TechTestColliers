import jwtDecode from 'jwt-decode';
import {storage} from '../hooks/use-storage.hook';
import {AuthType, DecodeTokenType} from '../interface/auth.interface';

export const getAccessToken = async (): Promise<string | null> => {
  return new Promise(async function (resolve, reject) {
    const JSONProfile = storage.getString('profile');
    let accessTokenUser: string | null = null;
    let refreshTokenUser: string | null = null;
    let now = Math.round(Date.now() / 1000);
    if (JSONProfile) {
      const profileObject = JSON.parse(JSONProfile) as AuthType;
      accessTokenUser = profileObject.accessToken;
      let decodedAccessToken = jwtDecode(accessTokenUser) as DecodeTokenType;
      refreshTokenUser = profileObject.refreshToken;
      let decodedRefreshToken = jwtDecode(refreshTokenUser) as DecodeTokenType;

      if (now > decodedAccessToken.exp) {
        if (now > decodedRefreshToken.exp) {
          // THROW TO LOGIN
          reject('expired to login');
          storage.set('isLogin', false);
        } else {
          // HIT REFRESH TOKEN API AND UPDATE LOCAL STORAGE
          reject('expired to login');
          storage.set('isLogin', false);
        }
      } else {
        resolve(accessTokenUser);
      }
    }
  });
};
