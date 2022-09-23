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
       let result = this.books.find(currentBool => currentBool[type] === value);
       return result || null;
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

//Класс для работы с оценкой по предмету
class GradeBySubject {
    constructor(grade, subject) {
        this.grade = grade;
        this.subject = subject;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = [];
    }
    setSubject(subjectName) {
        this.subject = subjectName;
    }

    addMark(mark, subject) {
        if (mark<1 || mark > 5) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
        this.marks.push(new GradeBySubject(mark, subject));
    }

    getAverage() {
        const sum = this.marks.reduce( (previousSumValue, item) => previousSumValue + item.grade, 0);
        return sum / this.marks.length;
    }

    getAverageBySubject(subject) {
        const arrayWithOnlySelectSubject = this.marks.filter(item => item.subject === subject);
        if (arrayWithOnlySelectSubject.length !== 0) {
            const sum = arrayWithOnlySelectSubject.reduce( (previousSumValue, item) => previousSumValue + item.grade, 0);
            return sum / arrayWithOnlySelectSubject.length;
        } else {
            return undefined;
        }
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}


