"use strict";
// Grabbing DOM elements
const newBookButton = document.querySelector(".new-book-btn");
const booksContainer = document.querySelector(".books-container");
const newBookDialog = document.querySelector(".new-book-dialog");
const newBookForm = document.querySelector(".new-book-form");
const cancelButton = document.querySelector(".cancel-btn");
const books = [];
function Book(title, author, pages, isRead, bookID) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.bookID = bookID;
}
function addBookToLibrary(title, author, pages, isRead) {
    const bookID = crypto.randomUUID();
    // Create the book and then add it to the array
    const newBook = new Book(title, author, pages, isRead, bookID);
    books.push(newBook);
    // Modify the DOM by adding the new book as a card to the book container.
    const bookCard = createBookCard(newBook);
    booksContainer?.appendChild(bookCard);
}
function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.bookId = book.bookID;
    card.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="book-pages">Pages: ${book.pages}</div>
        <div class="book-isRead">Read: ${book.isRead ? "Yes" : "No"}</div>
        <div class="book-buttons">
            <button class="remove-book-btn">Remove Book</button>
        </div>
    `;
    const removeButton = card.querySelector(".remove-book-btn");
    removeButton?.addEventListener("click", () => {
        deleteBook(book.bookID);
        console.log("Book removed");
    });
    return card;
}
function deleteBook(bookID) {
    const index = books.findIndex((book) => book.bookID === bookID);
    if (index === -1)
        return;
    books.splice(index, 1);
    const card = document.querySelector(`[data-book-id="${bookID}"]`);
    card?.remove();
}
// Event Listeners
newBookButton?.addEventListener("click", () => {
    newBookDialog?.showModal();
});
cancelButton?.addEventListener("click", () => {
    newBookDialog?.close();
});
newBookForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    addBookToLibrary(title, author, pages, isRead);
    newBookForm.reset();
    newBookDialog?.close();
});
