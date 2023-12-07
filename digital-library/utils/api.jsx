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

export async function deleteComment(comment_id) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/resources/comments/${comment_id}`);
        return response.data;
    } catch(error) {
        console.error('Error deleting comment:', error);
        throw error;
    }
}

export async function addResource(new_resource) {
    try {
        const response = await axios.post(`${API_BASE_URL}/resources`, new_resource);
        return response.data;
    } catch(error) {
        console.error('Error adding resource:', error);
        throw error;
    }
}

export async function getResourcePdf(resource_id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/${resource_id}/pdf`);
        return response.data
    } catch(error){
        console.error('Error fetching comments', error)
        throw error;
    }
}
