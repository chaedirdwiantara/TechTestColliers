import jwtDecode from 'jwt-decode';
import {storage} from '../hooks/use-storage.hook';
import {DecodeTokenType} from '../interface/auth.interface';

export const getAccessToken = async (): Promise<string | null> => {
  return new Promise(async function (resolve, reject) {
    const JSONProfile = storage.getString('profile');
    let now = Math.round(Date.now() / 1000);
    if (JSONProfile) {
      const profileObject = JSON.parse(JSONProfile);
      let decodedAccessToken = jwtDecode(profileObject) as DecodeTokenType;

      if (now > decodedAccessToken.exp) {
        reject('expired to login');
        storage.set('isLogin', false);
      } else {
        resolve(profileObject);
      }
    }
  });
};
