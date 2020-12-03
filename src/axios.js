import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-bdf68.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-bdf68/us-central1/api/", //THE API (cloud function) URL
});

export default instance;
