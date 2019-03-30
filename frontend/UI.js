import BookService from './services/BookService';
const bookService = new BookService();

class UI {

    async renderBooks() {
        const books = await bookService.getBooks();
        const bookCardContainer = document.getElementById('books-card');
        bookCardContainer.innerHTML = '';
        books.forEach(book => {
            const div = document.createElement('div');
            div.className = '';
            
        });
        //console.log(books);
    }

    async addANewBook(book) {
      await bookService.postBook(book);
      this.clearBookForm();
    }

    clearBookForm() {
        document.getElementById ('book-form').reset();
    }
        

    deleteBook() {}
}

export default UI;