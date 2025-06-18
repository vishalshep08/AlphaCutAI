import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useAuth, useUser } from '@clerk/clerk-react';
import { AppContext } from "../context/AppContext";
import { toast } from 'react-hot-toast'; // assuming you use react-toastify


const UserSyncHandler = () => {
    const { isLoaded, isSignedIn, getToken } = useAuth();
    const { user } = useUser();
    const [synced, setSynced] = useState(false);
    const { backendUrl, loadUserCredits} = useContext(AppContext);

    useEffect(() => {
        const saveUser = async () => {
            if (!isLoaded || !isSignedIn || synced) {
                return;
            }

            try {
                const token = await getToken();

                const userData = {
                    clerkId: user.id,
                    email: user.primaryEmailAddress.emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    photoUrl: user.imageUrl, // Use imageUrl if available
                    //username: user.username || '', // Use username if available
                };

                await axios.post(backendUrl+"/users", userData, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                setSynced(true); // Mark as synced to prevent re-syncing
                await loadUserCredits(); // Load user credits after syncing
                toast.success("User synced successfully!");

                //TODO: update the user credits
            } catch (error) {
                console.error("User sync failed", error);
                toast.error("User sync failed. Please try again!");
            }
        };

        saveUser(); // Call the function
    }, [isLoaded, isSignedIn, getToken, user, synced, backendUrl]);

    return null; // No UI component needed, just a handler
};

export default UserSyncHandler;
