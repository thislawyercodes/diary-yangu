import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'authToken';

export const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    throw new Error('Failed to save token.');
  }
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (error) {
    throw new Error('Failed to fetch token.');
  }
};
