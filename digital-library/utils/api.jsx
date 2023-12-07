import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export async function getResources() {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data
    } catch(error){
        console.error('Error fetching resources', error)
        throw error;
    }
}

export async function getComments(resource_id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/${resource_id}/comments`);
        return response.data
    } catch(error){
        console.error('Error fetching comments', error)
        throw error;
    }
}

export async function addComment(resource_id, new_comment) {
    try {
        const response = await axios.post(`${API_BASE_URL}/resources/${resource_id}/comments`, new_comment);
        return response.data;
    } catch(error) {
        console.error('Error adding comment:', error);
        throw error;
    }
}

export async function addBook(new_book) {
    try {
        const response = await axios.post(`${API_BASE_URL}/books`, new_book);
        return response.data;
    } catch(error) {
        console.error('Error adding book:', error);
        throw error;
    }
}
