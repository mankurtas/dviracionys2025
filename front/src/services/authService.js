
const BASE_URL = import.meta.env.VITE_API_URL;

export const authenticate = async (password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // needed to store the cookie from backend
        body: JSON.stringify({ password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication failed");
      }
  
      return true;
    } catch (error) {
      console.error("Auth error:", error.message);
      return false;
    }
  };
  

  export const checkAuth = async () => {
    try {
      const response = await fetch(`${BASE_URL}/view"`, {
        method: "GET",
        credentials: "include", // Send the cookie
      });
  
      return response.ok;
    } catch (error) {
      console.error("Auth check failed:", error);
      return false;
    }
  };
