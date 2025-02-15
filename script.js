const Library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    Library.push(book);
    displayBooks(); // Update display after adding a book
}

function displayBooks() {
    const display = document.querySelector(".display");
    display.innerHTML = ""; // Clear previous content to avoid duplication

    Library.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read}</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;

        display.appendChild(card);
    });
}

function removeBook(index) {
    Library.splice(index, 1);
    displayBooks(); // Update UI after removing a book
}

// Example usage
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '310', 'Not Read');
const hobbit2 = new Book('The Hobbit', 'J.R.R. Tolkien', '310', 'Not Read');
addBookToLibrary(hobbit2);
addBookToLibrary(hobbit2);addBookToLibrary(hobbit2);addBookToLibrary(hobbit2);addBookToLibrary(hobbit2);addBookToLibrary(hobbit2);