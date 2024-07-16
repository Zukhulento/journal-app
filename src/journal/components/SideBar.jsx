import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
        variant="permanent"
        open
        sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        >
            <Toolbar>
                <Typography>Luis Matus</Typography>
            </Toolbar>
            <Divider />
            <List>
                {["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                            <ListItemText primary={text} />
                            <ListItemText secondary={"Ejemplo"} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ) )}
            </List>
        </Drawer>
    </Box>
  );
};
