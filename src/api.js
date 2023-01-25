import axios from "axios";

const searchImages = async (term) => {

  const response = await axios.get( 'https://api.unsplash.com/search/photos', {

    headers: {
    Authorization: 'Client-ID RdL5dIP3c1facGDK7CZwPeCq2GMeGTOuKTRBZPfXnnc',
    },

    params: {
      query: term,
    },

  });

  return response.data.results;

}

export default searchImages;
