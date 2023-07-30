import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Help, People, Settings } from "@mui/icons-material";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

import iconUrl from "../../assets/logo.svg";
import SearchBar from "./search-bar";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu anchorEl={anchorEl} id={menuId} keepMounted open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/tokens");
        }}
      >
        Tokens
      </MenuItem>
      <MenuItem onClick={() => Auth.signOut()}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            <img
              src={iconUrl}
              alt="Raktar"
              style={{ padding: "10px", maxWidth: "auto", maxHeight: "45px" }}
            />
          </Button>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="user directory"
              aria-controls="user-dir-btn"
              aria-haspopup="true"
              onClick={() => navigate("/users")}
              color="inherit"
            >
              <People />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="help"
              aria-controls="help-btn"
              aria-haspopup="true"
              onClick={() => navigate("/help")}
              color="inherit"
            >
              <Help />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Settings />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
