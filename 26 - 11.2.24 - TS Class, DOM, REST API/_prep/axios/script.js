var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from './node_modules/axios';
// ---- THE AXIOS OBJECT
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    },
});
// Get all users
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.get('/posts');
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to fetch users');
    }
});
// Get a single user by ID
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.get(`/posts/${id}`);
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to fetch user');
    }
});
function updateUI(data) {
    let htmlContent = '';
    // לולאה שעוברת על כל האיברים מהמערך שהתקבל מהתשובה של השרת
    for (let post of data) {
        htmlContent += `
      <tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>
    `;
    }
    document.getElementById('output').innerHTML = `<table>${htmlContent}</table>`;
}
updateUI(getPosts());
