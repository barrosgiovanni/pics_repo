import React from "react";
// import Axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
// import ImageShow from "./components/ImageShow";

function App() {

  const handleSubmit = (term) => {
    console.log('search', term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  )

}

export default App;
