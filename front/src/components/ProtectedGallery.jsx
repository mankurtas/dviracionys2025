import { useState, useEffect } from "react";
import { authenticate, checkAuth } from "../services/authService";
import Gallery from "./Gallery";

const ProtectedGallery = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  // Check cookie-based login on initial load
  useEffect(() => {
    const verify = async () => {
      const isValid = await checkAuth();
      setIsAuthorized(isValid);
    };
    verify();
  }, []);

  const handleLogin = async () => {
    const success = await authenticate(password);
    setIsAuthorized(success);
  };

  if (isAuthorized) {
    return <Gallery />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4">
    <div className="w-full max-w-sm p-6 rounded-xl bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h2 className="text-2xl font-bold text-center text-primary">Galerija</h2>
  
      <label className="form-control w-full">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Reikalingas kodas"
          className="input input-bordered input-primary w-full"
        />
      </label>
  
      <button onClick={handleLogin} className="btn btn-primary w-full">
        Atrakinti Galeriją
      </button>
    </div>
  </div>
  

  );
};

export default ProtectedGallery;
