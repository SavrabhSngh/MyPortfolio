import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./DrawerAppBar.css";
import { downloadPdf } from "../../Services/Helpers";
import { CAPS_NAME, FULL_NAME, NAV_ITEMS } from "../../Services/Constants";
import _ from "lodash";

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getElementAndScroll = (elem) => {
    const element = document.getElementById(elem);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleClick = (e) => {
    const text = e.target.outerText;
    if (_.isEqual(text, "Features")) {
      getElementAndScroll("features");
    } else if (_.isEqual(text, "Experience")) {
      getElementAndScroll("experience");
    } else if (_.isEqual(text, "Projects")) {
      getElementAndScroll("projects");
    } else if (_.isEqual(text, "Contact")) {
      getElementAndScroll("contact");
    } else if (_.isEqual(text, "Resume")) {
      downloadPdf("./pdf/resume.pdf", "SavrabhSDE.pdf");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {CAPS_NAME}
      </Typography>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={handleClick}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          color: "#000",
          background: "#ecf0f3",
          boxShadow: "-1px 11px 24px -11px rgb(0 0 0 / 75%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#ff014f" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { lg: "none", xs: "block", md: "none", sm: "none" },
            }}
          >
            {CAPS_NAME}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {FULL_NAME}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                className={
                  index === NAV_ITEMS.length - 1 ? "nav-button" : "nav-content"
                }
                onClick={handleClick}
              >
                {item}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "75%",
              background: "#ecf0f3",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
