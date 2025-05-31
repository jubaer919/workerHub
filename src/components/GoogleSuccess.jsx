import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      // Redirect to home or wherever
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <div>Logging you in...</div>;
}

export default GoogleSuccess;
