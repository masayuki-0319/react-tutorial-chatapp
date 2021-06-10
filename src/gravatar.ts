import crypto from 'crypto';

export const gravatarPath = (name: string): string => {
  if (name === '') {
    name = 'gipcompany@gmail.com';
  }
  const sanitizeName = name.trim().toLocaleLowerCase();

  const md5 = crypto.createHash('md5');
  const digest = md5.update(sanitizeName).digest('hex');

  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};
