export const login = (id, token, name, email, books) => ({
    type: 'LOGIN',
    payload: { id, token, name, email, books }
});

export const logout = () => ({
    type: 'LOGOUT'
});
