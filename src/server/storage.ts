import Api from './api';

export interface UserInfoProps {
  target: number;
  balance: number;
}

export const loadUserInfo = async (): Promise<UserInfoProps> => {
  try {
    return await Api.get('/userInfo');
  } catch {
    throw new Error('Falha ao carregar informações de usuário.');
  }
};
