import React, { useState } from "react";
// import { Button, Dialog, DialogContent, TextField, List, ListItem, ListItemText } from '@mui/material';
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Scientist from "./Scientist";
import TextField from "@mui/material/TextField";

const actions = [{}];

export default function Chatbot() {
  const [open, setOpen] = useState(false); // State to control SpeedDial open/close

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle the open state
  };
  const handleActionClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            bottom: -170,
            right: 100,
            "& .MuiSpeedDial-fab": {
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
              },
            },
          }}
          icon={<Scientist />}
          onClick={handleToggle}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={
                <Box
                  sx={{
                    width: 350,
                    height: 400,
                    bgcolor: "rgb(90, 22, 105)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 1,
                    position: "absolute",
                    right: "0",
                    bottom: "0px",
                  }}
                  onClick={handleActionClick}
                >
                  {action.name}
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    sx={{position:"flex",bottom:"-130px",width:"90%"}}
                  />
                </Box>
              }
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
