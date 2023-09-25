import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';


import { useSession, signIn, signOut } from "next-auth/react";

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const IndexHomePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  

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
   

    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
    </div>
  )
}



export default IndexHomePage
