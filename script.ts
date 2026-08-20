
// Event Listeners
const newBookButton = document.querySelector(".new-book-btn");
const booksContainer = document.querySelector(".books-container");

const books = []

function Book(title: string, author: string, pages: number, isRead: boolean, bookID: string) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.bookID = bookID;
}

function addBookToLibrary(title: string, author: string, pages: number, isRead: boolean) {
    const bookID = crypto.randomUUID();

    const newBook = Book(title, author, pages, isRead, bookID);
}
