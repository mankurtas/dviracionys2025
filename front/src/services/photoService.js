export const getPhotos = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/photos/view", {
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