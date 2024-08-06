import axios from "axios";

export const getData = (data) => {
  return {
    type: "FETCHED DATA",
    payload: data,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const {data : {data}} = await axios.get(
        `https://tata-1mg-backend.onrender.com/products/avp`
      );
      console.log(data);
      dispatch(getData(data));
    } catch (error) {
      console.log(error);
    }
  };
};
