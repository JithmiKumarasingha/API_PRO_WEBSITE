const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const apiService = {
  async fetchUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();
      return users.slice(0, 10); // Return only first 10 users
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },
};
