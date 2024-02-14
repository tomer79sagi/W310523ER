import axios from 'axios';


// ---- THE AXIOS OBJECT
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  },
});


// ---- GET (ALL & ONE)
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  // Other user properties
}

// Get all users
const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Get a single user by ID
const getPostById = async (id: number): Promise<Post> => {
  try {
    const response = await api.get<Post>(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

function updateUI(data: any): void {   // משתנה שישמור את התוכן של הטבלה שיתעדכן בכל איטרציה של הלולאה
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

  document.getElementById('output')!.innerHTML = `<table>${htmlContent}</table>`;
}

updateUI(getPosts());