export const getAll = (book) => ({
    type: 'GET_ALL',
    payload: book
});

export const deleteAll = () => ({
    type: 'DELETE_ALL'
});