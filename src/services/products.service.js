import axios from 'axios';
const API_URL = 'https://dummyjson.com/products';
export async function getAllProducts() {
    return await axios.get(API_URL)
}
export async function getProductById(id) {
    return await axios.get(`${API_URL}/${id}`)
}
