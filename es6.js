const form = document.getElementById('form')
const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const bookList = document.getElementById('book-list')

// Book Constructor
class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
}


//UI constructor
class UI extends Book {
    constructor(){
        super(title, author, year)
    }
    
//add Book 
addBook(book){
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    <td>
      <i class="fas fa-times"></i>
    </td>
    `
    bookList.appendChild(row)
  }
  
  //clear input
  clearInput(){
    title.value = ''
    author.value = ''
    year.value = ''
  }
  
  //Show massage
 showMassage(massage, className){
    const div = document.createElement('div')
    div.classList = `alert alert-${className}`
    div.textContent = massage
  
    const containerMine = document.querySelector('.containerMine')
    containerMine.insertBefore(div, form)
  
    //set time out
    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 2000);
  }
  
  //delete Book
  deleteBook(target){
    if(target.classList == 'fas fa-times'){
      target.parentElement.parentElement.remove()
    }
  }
  
}


// form event
form.addEventListener('submit', function(e){
  e.preventDefault()
  const book = new Book(title.value, author.value, year.value)
  const ui = new UI()

  if(title.value === '' || author.value === '' ||year.value === ''){
    ui.showMassage(`Not enough information`, 'danger')
  }
  else{
    ui.showMassage(`Book addition is complete`, 'info')
    ui.addBook(book)
    ui.clearInput()
  }
})

// delete book  
bookList.addEventListener('click', (e)=>{
  const ui = new UI()
  ui.deleteBook(e.target)
  ui.showMassage(`The book has been deleted`, 'warning')
})

















// es5 
// const form = document.getElementById('form')
// const title = document.getElementById('title')
// const author = document.getElementById('author')
// const year = document.getElementById('year')
// const bookList = document.getElementById('book-list')

// // Book Constructor
// function Book(title, author, year) {
//   this.title = title
//   this.author = author
//   this.year = year
// }

// //UI constructor
// function UI(){}

// //add Book 
// UI.prototype.addBook = function(book){
//   const row = document.createElement('tr')
//   row.innerHTML = `
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.year}</td>
//   <td>
//     <i class="fas fa-times"></i>
//   </td>
//   `
//   bookList.appendChild(row)
// }

// //clear input
// UI.prototype.clearInput = function(){
//   title.value = ''
//   author.value = ''
//   year.value = ''
// }

// //Show massage
// UI.prototype.showMassage = function(massage, className){
//   const div = document.createElement('div')
//   div.classList = `alert alert-${className}`
//   div.textContent = massage

//   const containerMine = document.querySelector('.containerMine')
//   containerMine.insertBefore(div, form)

//   //set time out
//   setTimeout(() => {
//     document.querySelector('.alert').remove()
//   }, 2000);
// }

// //delete Book
// UI.prototype.deleteBook = function(target){
//   if(target.classList == 'fas fa-times'){
//     target.parentElement.parentElement.remove()
//   }
// }

// // form event
// form.addEventListener('submit', function(e){
//   e.preventDefault()
//   const book = new Book(title.value, author.value, year.value)
//   const ui = new UI()

//   if(title.value === '' || author.value === '' ||year.value === ''){
//     ui.showMassage(`Not enough information`, 'danger')
//   }
//   else{
//     ui.showMassage(`Book addition is complete`, 'info')
//     ui.addBook(book)
//     ui.clearInput()
//   }
// })

// // delete book  
// bookList.addEventListener('click', (e)=>{
//   const ui = new UI()
//   ui.deleteBook(e.target)
//   ui.showMassage(`The book has been deleted`, 'warning')
// })