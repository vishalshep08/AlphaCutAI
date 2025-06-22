import { createContext, useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [credit, setCredit] = useState(0);
  const { getToken } = useAuth();
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate(); // Ensure App is wrapped in <BrowserRouter>

  const loadUserCredits = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`${backendUrl}/users/credits`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCredit(response.data.data.credits);
      } else {
        toast.error("Error loading user credits");
      }
    } catch (error) {
      console.error("Failed to load credits:", error);
      toast.error("Error loading user credits");
    }
  };

  const removeBg = async (selectedImage) => {
    try {
      if (!isSignedIn) {
        openSignIn();
        return;
      }

      setImage(selectedImage);
      setResultImage(null);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      if (selectedImage) formData.append("file", selectedImage);

      const response = await axios.post(`${backendUrl}/images/remove-background`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResultImage(`data:image/png;base64,${response.data}`);
      setCredit((prev) => prev - 1);
      toast.success("Background removed successfully!");
    } catch (error) {
      console.error("Background removal failed:", error);
      toast.error("Error removing background. Please try again!");
    }
  };

  return (
    <AppContext.Provider
      value={{
        credit,
        setCredit,
        image,
        setImage,
        resultImage,
        setResultImage,
        backendUrl,
        loadUserCredits,
        removeBg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
