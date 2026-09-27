
export const isAuthenticated = () => {
  return localStorage.getItem('uvie_dev_auth') === 'true';
};

export const login = (password) => {
  
  if (password === '12345678') {
    localStorage.setItem('uvie_dev_auth', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('uvie_dev_auth');
};