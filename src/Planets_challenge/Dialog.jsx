import * as React from "react";
import Paragraph1 from "./Paragraph1";
import Button from "@mui/material/Button";
import Dialogs from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "./Radio";

export default function Dialog({ open, onClose, index }) {
  return (
    <div>
      <React.Fragment>
        <Dialogs
          sx={{ height: "650px", overflow: "hidden" }}
          open={open}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "hidden",
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">
            <Paragraph1 index={index} />
          </DialogTitle>
          <DialogContent>
            <Radio />
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "white" }} onClick={onClose}>
              Close
            </Button>
            <Button sx={{ color: "white" }} onClick={onClose} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialogs>
      </React.Fragment>
    </div>
  );
}
