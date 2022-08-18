import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const myAPIkey = '29359715-57cbbaa05904a72f5703b5006';
const perPages = 40;

const fetchPictures = async(searchQuery, page) => {
    const response = await axios.get(`${BASE_URL}?key=${myAPIkey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPages}&page=${page}`);
    return response.data; 
}
export default fetchPictures;
