//Library storage
const myLibrary = [

];

const container = document.querySelector(".container");

//Get form inputs
const titleBook = document.getElementById("title-book");
const authorBook = document.getElementById("author-book");
const pagesBook = document.getElementById("pages-book");





function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status
};








function addBookToLibrary() {

  const book1 = new Book(titleBook.value, authorBook.value, pagesBook.value, true);

  myLibrary.push(book1);
  console.log(myLibrary);
  console.log(titleBook);

  // create elements for the book card
  const bookCard = document.createElement("div");
  const bookDiscription = document.createElement("div");
  const titlePar = document.createElement("p");
  const authorPar = document.createElement("p");
  const pagesPar = document.createElement("p");
  const bookAction = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  // add class to elements
  bookCard.classList.add("book-card");
  bookDiscription.classList.add("book-discription");
  bookAction.classList.add("book-action");
  deleteBtn.classList.add("delete-button");
  readBtn.classList.add("read-button");

  // create text for button
  deleteBtn.textContent = "Delete";
  readBtn.textContent = "Reading.."

  // create text content for paragraphs of bookdiscription
  titlePar.textContent = "Title: " + book1.title;
  authorPar.textContent = "Author: " + book1.author;
  pagesPar.textContent = "Pages: " + book1.pages;


  // Append elements
  container.appendChild(bookCard);
  bookCard.appendChild(bookDiscription);
  bookCard.appendChild(bookAction);
  bookDiscription.appendChild(titlePar);
  bookDiscription.appendChild(authorPar);
  bookDiscription.appendChild(pagesPar);
  bookAction.appendChild(deleteBtn);
  bookAction.appendChild(readBtn);

  deleteBtn.addEventListener("click", () => {
    container.removeChild(bookCard); // remove the card from DOM
    myLibrary.splice(myLibrary.indexOf(book1), 1); // optional: remove from array
    console.log(myLibrary);
  });

  readBtn.addEventListener("click", () =>{

    readBtn.classList.toggle("finished-book")
    if(readBtn.textContent === "Reading.."){
      readBtn.textContent = "Finished"
    }
    else{
      readBtn.textContent = "Reading.."
    }
  })

};


const addButton = document.querySelector(".add-book");

const pagesInput = document.getElementById("pages-book");
const pagesError = document.getElementById("pages-error");




addButton.addEventListener("click", () => {
  let valid = true;

  // Pages validation using HTML5 min
  if (!pagesBook.validity.valid) {
    if (pagesBook.validity.rangeUnderflow) {
      pagesError.textContent = "Pages must be at least 1";
    } else if (pagesBook.validity.valueMissing) {
      pagesError.textContent = "Pages is required";
    }
    valid = false;
  } else {
    pagesError.textContent = "";
  }

  if (valid) {
    addBookToLibrary();
  }
});