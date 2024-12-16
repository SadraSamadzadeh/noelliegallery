import bcrypt from 'bcrypt';

const CUSTOM_SALT = parseInt(process.env.BCRYPT_SALT || '10', 10);

export const hashPassword = async (password: string): Promise<string> => {
  if (!CUSTOM_SALT) {
    throw new Error('Custom salt is not defined in environment variables');
  }

  const hashedPassword = await bcrypt.hash(password, CUSTOM_SALT);
  return hashedPassword;
};

export const deHashPassword = async (password: string, dbPassword: string): Promise<boolean> => {
  if (!CUSTOM_SALT) {
    throw new Error('Custom salt is not defined in environment variables');
  }

  const correct = await bcrypt.compare(password, dbPassword);
  return correct;
};