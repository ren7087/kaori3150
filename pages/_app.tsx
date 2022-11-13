import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsightsIcon from "@mui/icons-material/Insights";
import CategoryIcon from "@mui/icons-material/Category";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "black" }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  <Link href="/">Kaoritoshiawase</Link>
                </Typography>
                <Tooltip title="user情報" placement="top">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    // style={{ color: "#d5a770" }}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="香水診断" placement="top">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <InsightsIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="商品閲覧" placement="top">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <CategoryIcon />
                  </IconButton>
                </Tooltip>
              </Toolbar>
            </AppBar>
          </Box>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
