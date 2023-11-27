// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function BookDisplay({ book }) {
    // we are using { book } instead of props so that we can access it
    // by just using book, instead of props.book

    const loaded = () => {
        return (
            <>
                <h1>{book.Title}</h1>
                <h2>{book.Thumbnail}</h2>
                <Ratings
                {book.Ratings.map (rating => {
                    return (<><h4>{rating.Source}</h4>
                    <h4>{rating.Value}</h4></>)
                })  }
            </>
        )
    }
    const loading = () => {
        return <h1>No Book to Display</h1>
    }
    //The component must return some JSX
    return book ? loaded() : loading();

}

export default BookDisplay;