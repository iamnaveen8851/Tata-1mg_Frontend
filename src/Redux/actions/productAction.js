import axios from "axios";

export const getProducts = (data) => {
  return {
    type: "FETCHED DATA",
    payload: data,
  };
};

export const fetchData = (sortByPrice, filterByTitle) => {
  return async (dispatch) => {
    try {
      let url = `https://tata-1mg-backend.onrender.com/products`;

      if (sortByPrice) {
        url += `?sort=${sortByPrice}`;
      }
      else if (filterByTitle){
        url+= `?title=${filterByTitle}`
      }

      const {
        data: { data },
      } = await axios.get(url);
      // console.log(data);
      dispatch(getProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};
