import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const theUser = `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(theUser);
    })
    .catch(() => console.log('Signup system offline'));
}
