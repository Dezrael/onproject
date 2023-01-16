export const simLogin = (username: string): void => {
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('username', username);
};

export const simLogout = (): void => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('username');
};
