import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import data from '../data/index.json';

const PetModal = ({ open, handleClose, pet }) => {
  // Access the shelters data from the imported JSON
  const shelters = data.shelters;

  // Find the shelter information for the current pet
  const shelter = shelters.find((shelter) => shelter.name === pet.shelther);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
         {/* Conditionally render the ImageSlider component */}
         {pet.images && pet.images.length > 0 && <ImageSlider images={pet.images} />}

        <Typography id="modal-modal-title" variant="h6" component="h2" color="text.secondary">
          {pet.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} color="text.secondary">
          {pet.description}
        </Typography>
        <hr />
        {/* Display the shelter information */}
        {shelter && (
          <>
            <Typography variant="body2" color="text.secondary">
              Shelter: {shelter.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: {shelter.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {shelter.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: {shelter.phone}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PetModal;
