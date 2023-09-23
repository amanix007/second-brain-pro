import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const IndexHomePage = () => {
  const [user, setUser] = useState(null);
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  const handleLogin = async () => {
    await useSession().signIn();
  };

  const handleLogout = async () => {
    await useSession().signOut();
  };
  return (
    <div>
     <h1>My Next.js App</h1>
      {user ? (
        <div>
          <p>Hello, {user.name}!</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Button onClick={handleLogin}>Login with Google</Button>
      )}
    
    </div>
  )
}



export default IndexHomePage
