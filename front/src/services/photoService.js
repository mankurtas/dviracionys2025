const BASE_URL = import.meta.env.VITE_API_URL;

export const getPhotos = async () => {
    try {
      const response = await fetch(`${BASE_URL}/view`, {
        method: "GET",
        credentials: "include", // IMPORTANT: include cookies (JWT)
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
  
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error fetching photos:", error.message);
      return [];
    }
  };