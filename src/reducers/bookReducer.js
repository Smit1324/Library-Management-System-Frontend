const initialBook = []

const bookReducer = (book = initialBook, action) => {

    switch (action.type) {

        case "GET_ALL":
            book.push(action.payload);
            return book

        case "ADD_BOOK":
            book.push(action.payload);
            return book

        case "DELETE_BOOK":
            book = book.filter(ele => ele._id !== action.payload)
            return book

        case "DELETE_ALL":
            book.splice(0);
            return book

        default:
            return book;
    }
}

export default bookReducer