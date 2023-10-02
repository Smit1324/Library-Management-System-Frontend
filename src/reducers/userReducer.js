const initialUser = {
    isLoggedIn: false,
    id: null,
    token: null,
    name: null,
    email: null,
    isAdmin: false,
    books: []
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
                isAdmin: action.payload.admin,
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
                isAdmin: false,
                books: []
            };

        case 'ISSUE_BOOK':
            user.books.push(action.payload)
            return user;

        case 'RETURN_BOOK':
            user.books = user.books.filter(ele => ele._id !== action.payload)
            return user;

        default:
            return user
    }
}

export default userReducer;