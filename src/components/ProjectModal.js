import React from "react";
import { Fade, Modal, Typography, Backdrop, Box } from "@mui/material";

const ProjectModal = ({ open, handleClose, img }) => {
  
  return (
    <div className="flex flex-center">
      <Modal
        className="ProjectModal flex flex-center"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="ProjectModal__container flex flex-center">
            <img className="ProjectModal__img" src={img} alt="img" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectModal;
