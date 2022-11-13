import { Button, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";

const Signin: NextPage = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", textAlign: "center" }}>
        <Typography variant="h3">ログイン</Typography>
        <div>
          <TextField
            label="email"
            color="secondary"
            style={{
              marginTop: "20px",
              marginLeft: "10%",
              marginRight: "10%",
              marginBottom: "10px",
            }}
            focused
          />
          <TextField
            label="password"
            color="secondary"
            style={{
              marginTop: "20px",
              marginLeft: "10%",
              marginRight: "10%",
              marginBottom: "10px",
            }}
            focused
          />
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              marginLeft: "10%",
              marginRight: "10%",
              marginBottom: "10px",
            }}
          >
            ログイン
          </Button>
        </div>
        <Button onClick={() => signIn()}>
          <GoogleIcon />
          Googleアカウントでログイン
        </Button>
      </div>
      <div style={{ width: "50%" }}>
        <Image src="/images/okou.jpg" width={450} height={700} alt={"hello"} />
      </div>
    </div>
  );
};

export default Signin;
