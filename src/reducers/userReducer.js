const initialUser = {
    id: null,
    token: null
}

const userReducer = (user = initialUser, action) => {
    switch (action.type) {

        case 'LOGIN':
            return {
                ...user,
                id: action.payload.id,
                token: action.payload.token,
            };

        case 'LOGOUT':
            return {
                ...user,
                id: null,
                token: null,
            };

        default:
            return user
    }
}

export default userReducer;