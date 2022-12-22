
import axios from "axios";

export const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
  params: {textFormat: 'Raw', safeSearch: 'Off'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'fda8f8029cmsha0961e75078c965p13b912jsnf49203dc81af',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

export function getNews() {
    axios.request(options).then(function (response) {
    console.log("result: ", response)
    return response
   }).catch(function (error) {
       return error
   });
 
}
 