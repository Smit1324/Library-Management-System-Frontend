export const login = (id, token) => ({
    type: 'LOGIN',
    payload: { id, token }
});

export const logout = () => ({
    type: 'LOGIN'
});