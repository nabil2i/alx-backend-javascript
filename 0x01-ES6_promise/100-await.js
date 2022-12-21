import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const v = await uploadPhoto();
    const w = await createUser();
    return {
      photo: v,
      user: w,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
