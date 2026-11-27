const API_URL = 'http://localhost:3000'; // Beispiel-URL für das Backend

const api = {
    getUsers: async () => {
        try {
            const response = await fetch(`${API_URL}/users`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    },

    createUser: async (userData) => {
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            return null;
        }
    },

    updateUser: async (userId, userData) => {
        try {
            const response = await fetch(`${API_URL}/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating user:', error);
            return null;
        }
    },

    deleteUser: async (userId) => {
        try {
            const response = await fetch(`${API_URL}/users/${userId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error deleting user:', error);
            return null;
        }
    },

    resetPassword: async (userId) => {
        try {
            const response = await fetch(`${API_URL}/users/${userId}/reset-password`, {
                method: 'POST'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error resetting password:', error);
            return null;
        }
    }
};

export default api;
