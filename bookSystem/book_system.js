let books = [];

// Function to add a new book
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book); // Add book to the array
        showBooks(); // Update the displayed list of books
        clearInputs(); // Clear the input fields
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to display all books
function showBooks() {
    const booksDiv = books.map((book, index) => `
        <div>
            <h2>Book Number: ${index + 1}</h2>
            <p><strong>Book Name:</strong> ${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName}</p>
            <p><strong>Book Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
            <button onclick="deleteBook(${index})">Delete</button>
        </div>
    `);

    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Function to clear the input fields
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Function to delete a specific book by its index
function deleteBook(index) {
    books.splice(index, 1); // Remove the book at the given index
    showBooks(); // Refresh the displayed book list
}
