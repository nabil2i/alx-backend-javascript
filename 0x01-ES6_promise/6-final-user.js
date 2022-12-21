import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const signUpUserPromise = await signUpUser(firstName, lastName)
    .then((res) => ({
      status: 'fulfilled',
      value: res,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));

  const uploadPhotoPromise = await uploadPhoto(filename)
    .then((res) => ({
      status: 'fulfilled',
      value: res,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));

  return [signUpUserPromise, uploadPhotoPromise];
}
