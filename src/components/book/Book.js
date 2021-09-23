function Book({ book,  removeBook }) {
    return (
        <div key={book.id} className="item-Book">
            <div className={ "item-book item-text"}>
            <div className="item-delete" onClick={() => removeBook(book.id)}>
                Удалить
            </div>
               <h1>{book.Name}</h1>
               <center> <h3>{book.Author}</h3><img alt='обложка книги' width='145' height='205' src={`${book.Image}`}/></center>                               
            </div>            
        </div>
    )
}
export default Book