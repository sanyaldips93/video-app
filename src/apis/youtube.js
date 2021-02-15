import axios from "axios";
 
const KEY = 'AIzaSyDZwUxEZ0obN6EH0MWSOkhlNT4_NsPzNgA';

export default axios.create({
  baseURL : "https://www.googleapis.com/youtube/v3",
  params : {
      part: 'snippet',
      maxResults: 5,
      key: KEY
  }
});