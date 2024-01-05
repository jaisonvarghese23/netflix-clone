import axios from "axios";
import { baseUrl } from "./constants/Constant";
const Instance = axios.create({
    baseURL: baseUrl,
   
  });
  export default Instance;