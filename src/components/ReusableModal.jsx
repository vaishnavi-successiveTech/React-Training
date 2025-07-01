"use client";

import React from "react";
import { Modal, Box, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 300,
  backgroundColor: "white",
  padding: 20,
  borderRadius: 4,
  boxShadow: 24,
};
const ReusableModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {children}
        <Button
          variant="contained"
          onClick={onClose}
          style={{ marginTop: 20 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ReusableModal;
