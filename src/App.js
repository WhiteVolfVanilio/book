import Book from './components/book/Book'
import BookForm from './components/book/BookForm'
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
  const [books, setBooks] = useLocalStorage("books", []);
  const addBook = (userInput, userInput1,imageBase64) => {
    if(userInput) 
    if(userInput1) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        Name: userInput,
        Author: userInput1,     
        Image: imageBase64?imageBase64:"data:image/png;base64,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"   
      }
      setBooks([...books, newItem])
     
    }
  }
  const removeBook = (id) => {
    setBooks([...books.filter((book) => book.id !== id)])
  }
  return (
    <div className="App">    
      <div key={'AddNewBookForm'} className={"item-book"}>
        <div className={ "item-new-form"} >
        <div className="item-delete" >
                Всего книг: {books.length}
            </div>
          <center><h1>Мои книги react hooks. </h1></center>
        </div>
      </div>
      <div key={'AddNewBookForm'} className={"item-book"}>
        <div className={ "item-new-form"} >
          <BookForm addBook={addBook} />
        </div>
      </div>
      {books.map((book) => {
        return (
          <Book
            book={book}
            key={book.id}
            removeBook={removeBook}
            />
        )
      })}
    </div>
  );
}
export default App;