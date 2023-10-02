export const getAll = (book) => ({
    type: 'GET_ALL',
    payload: book
});

export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book
});

export const deleteBook = (book_id) => ({
    type: 'DELETE_BOOK',
    payload: book_id
});

export const deleteAll = () => ({
    type: 'DELETE_ALL'
});