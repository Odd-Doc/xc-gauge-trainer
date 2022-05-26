import axios from "axios";
const url = "http://localhost:3000/story";
//url should be client localhost in dev, with server port proxy
export const createStory = (newStory) => axios.post(url, newStory);
