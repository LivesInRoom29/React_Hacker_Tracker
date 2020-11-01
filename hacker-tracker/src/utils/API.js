import axios from "axios";
const URL = "https://randomuser.me/api/?results=200&nat=us";

// This API does not require a key nor a query string
export default {
  search: () => axios.get(URL)
};