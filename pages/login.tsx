import React from "react";
import { SessionProvider } from "next-auth/react";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <Button variant="contained" onClick={() => signIn("google")}>
      Sign in with Google
    </Button>
  );
};

export default function IndexPage() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <LoginButton />
    </div>
  );
}
