export const login = (id, token, name, email, books) => ({
    type: 'LOGIN',
    payload: { id, token, name, email, books }
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const issueBook = (book) => ({
    type: 'ISSUE_BOOK',
    payload: book
});

export const returnBook = (book_id) => ({
    type: 'RETURN_BOOK',
    payload: book_id
});
