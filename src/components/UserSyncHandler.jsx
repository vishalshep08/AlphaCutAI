import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useAuth, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { backendUrl, loadUserCredits } = useContext(AppContext);

  useEffect(() => {
    const controller = new AbortController();

    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || !user || synced) return;

      try {
        const token = await getToken();

        const userData = {
          clerkId: user.id,
          email: user?.primaryEmailAddress?.emailAddress || '',
          firstName: user?.firstName || '',
          lastName: user?.lastName || '',
          photoUrl: user?.imageUrl || '',
        };

        await axios.post(`${backendUrl}/users`, userData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        setSynced(true);
        await loadUserCredits();
        toast.success('User synced successfully!');
      } catch (error) {
        if (axios.isCancel(error)) return;

        const msg =
          error.response?.data?.message ||
          error.message ||
          'User sync failed. Please try again!';
        console.error('User sync failed:', error);
        toast.error(msg);
      }
    };

    saveUser();

    return () => controller.abort();
  }, [isLoaded, isSignedIn, user, synced, getToken, backendUrl, loadUserCredits]);

  return null;
};

export default UserSyncHandler;
