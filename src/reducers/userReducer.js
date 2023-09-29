const initialUser = {
    isLoggedIn: false,
    id: null,
    token: null,
    name: null,
    email: null,
    books: null
}

const userReducer = (user = initialUser, action) => {
    switch (action.type) {

        case 'LOGIN':
            return {
                ...user,
                isLoggedIn: true,
                id: action.payload.id,
                token: action.payload.token,
                name: action.payload.name,
                email: action.payload.email,
                books: action.payload.books,
            };

        case 'LOGOUT':
            return {
                ...user,
                isLoggedIn: false,
                id: null,
                token: null,
                name: null,
                email: null,
                books: null
            };

        default:
            return user
    }
}

export default userReducer;