class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
            return;
        }

        if (value > 100) {
            this._state = 100;
            return;
        }

        this._state = value;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount ) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type ='novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type ='fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type ='detective';
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
       let result = this.books.find(currentBool => {
        for (const key in currentBool) {
            if (key === type && currentBool[key] === value) {
                return true;
            }
        }
        return false;
       }); 
       if (result === undefined) {
        result = null;
       }

       return result;
    }

    giveBookByName(bookName) {
        let indexOfBook = this.books.findIndex(currentBook => currentBook.name === bookName);
        if (indexOfBook === -1) {
            return null;
        }

        let resultBook = this.books[indexOfBook];
        this.books.splice(indexOfBook, 1);

        return resultBook;
    }
}


