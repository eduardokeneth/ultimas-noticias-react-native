import axios from 'axios';

const REQUEST_URL = 'https://newsapi.org/v2/top-headlines?' +
'country=br&' +
'apiKey=f00f046152584bb19843e91baf29ffde';;

export const searchPost = () => {
    const request = axios.get(`${REQUEST_URL}`)
        return {
            type: 'SEARCH_POST',
            payload: request
        }
}