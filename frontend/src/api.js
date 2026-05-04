import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const getNotes = () => axios.get(`${API}/notes`);
export const addNote = (data) => axios.post(`${API}/notes`, data);
