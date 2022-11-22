import axios from "axios";
import { DB_URL } from "../config/constants";

export const api = axios.create({
    baseURL: DB_URL,
    timeout: 10000
});