// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function BookDisplay({ book }) {
  // we are using { book } instead of props so that we can access it
  // by just using book, instead of props.book

  const loaded = () => {
    // console.log("Entering Book Display");
    // console.log(book);
    //console.log(book.items[0].volumeInfo.title);
    //console.log(book.items[0].imageLinks.thumbnail)
    return (
      <div className="list">
        {/* <table> */}
  {/* <tr> */}
            {book.map((onebook) => {
              //   console.log(onebook);
              return (
                <div className="book" key={onebook.id}>
                  <img src={onebook.volumeInfo.imageLinks?.thumbnail} alt={onebook.volumeInfo.title}/>
                  <h5>{onebook.volumeInfo.title}</h5>
                  <p>{onebook.searchInfo?.textSnippet}</p>
                  {/* <a href={onebook.accessInfo.webReaderLink}>webLinks</a> */}
                  {onebook.saleInfo?.buyLink && (
                    <a href={onebook.saleInfo.buyLink}>webBuy</a>
                  )}
                </div>
              );
            })}
          {/* </tr> */}
         {/* </table> */}
        {/* <img src={book.items[0].imageLinks.thumbnail} alt={book.Title} /> */}

        {/* <h3>{book.items.mao((sbook)=>sbook.volumeInfo.subtitle)}</h3> */}
        {/* <h2>{book.Thumbnail}</h2> */}
        {/* <>
                {book.Ratings.map (rating => {
                    return (<><h4>{rating.Source}</h4>
                    <h4>{rating.Value}</h4></>)
                })  } */}
      </div>
    );
  };

  const loading = () => {
    return <h1>No Book to Display</h1>;
  };

  //The component must return some JSX
  return book ? loaded() : loading();
}

export default BookDisplay;
