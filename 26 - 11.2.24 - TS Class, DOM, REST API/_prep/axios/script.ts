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

alert(getPosts());