import {API_BASE_URL, API_KEY} from "@env";
import axios from "axios";

const instance = axios.create({
  baseURL:API_BASE_URL,
  params:{
    apikey: API_KEY
  }
});

export default instance;