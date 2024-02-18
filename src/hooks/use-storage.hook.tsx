import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: `collier-storage`,
  encryptionKey: 'collier-secret',
});

export type ProfileProps = {
  id: number;
  uuid: string;
  username: string;
  fullname: string;
  accessToken: string;
};

export const profileStorage = (): ProfileProps | null => {
  let profile: ProfileProps | null = null;
  const profileJSON = storage.getString('profile');
  if (profileJSON) {
    profile = JSON.parse(profileJSON);
  }
  return profile;
};
