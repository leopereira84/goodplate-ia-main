import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    "Authorization": "Key 0ff71a52ab2b4df6ad308c0cc72a741a"
  }
})
