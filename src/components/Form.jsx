import { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevent page from refreshing on form submissin
    event.preventDefault();

    // pass the search term to moviesearch prop (the method that will search)
    props.booksearch(formData.searchtitle);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            Title:{" "}
            <input
              type="text"
              name="searchtitle"
              onChange={handleChange}
              value={formData.searchtitle}
            />
          </p>
          <p>
            Author:{" "}
            <input
              type="text"
              name="searchauthor"
              onChange={handleChange}
              value={formData.searchauthor}
            />
          </p>
          <p>
            Book Type:{" "}
            <select
              name="searchbooktype"
              onChange={handleChange}
              value={formData.searchbooktype}
            >
              <option></option>
              <option>free-ebooks</option>
              <option>paid-ebooks</option>
              <option>ebooks</option>
            </select>
          </p>
          <input type="submit" value="retrieve books" />
        </form>
      </div>
    </>
  );
}

export default Form;
