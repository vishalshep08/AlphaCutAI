import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { backendUrl, loadUserCredits } = useContext(AppContext);

  useEffect(() => {
    const saveUser = async () => {
      // Prevent syncing if not loaded, not signed in, or already synced
      if (!isLoaded || !isSignedIn || synced) return;

      try {
        const token = await getToken();

        // Prepare user data for backend sync
        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          photoUrl: user.imageUrl || "",
          // username: user.username || "", // Uncomment if your user has username
        };

        // Send user data to backend API
        await axios.post(`${backendUrl}/users`, userData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSynced(true); // Avoid repeat syncs
        await loadUserCredits(); // Refresh user credits from backend
        toast.success("User synced successfully!");
      } catch (error) {
        console.error("User sync failed", error);
        toast.error("User sync failed. Please try again!");
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, getToken, user, synced, backendUrl, loadUserCredits]);

  // This component doesn't render UI
  return null;
};

export default UserSyncHandler;
