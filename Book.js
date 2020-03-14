class Book {
  constructor(title) {
    this.title = title;
    this.author = 'MapWINCY';
    this.pages = 4;
    this.description = 'The Story about Fast & Speed. How it all started';
    this.currentPage = 1;
    this.read = false;
  }
  
  readBook(pageNumber) {
    if (pageNumber > this.pages) {
      alert('Page is invalid');
    } else if (pageNumber==this.pages){
      this.read = !this.read;
    } else {
      this.currentPage = pageNumber;
    }
    
  }
}

export { Book };
