import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import data from '../data/index.json';
import PetModal from './PetModal';

export default function MultiActionAreaCard() {
  const [selectedPet, setSelectedPet] = useState(null);

  const handleOpenModal = (pet) => {
    setSelectedPet(pet);

  };

  const handleCloseModal = () => {
    setSelectedPet(null);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', justifyContent: 'center', padding: '50px 150px 150px 150px', alignItems: 'stretch' }}>
      {data?.pets?.map((pet, index) => (
        <Card key={index} sx={{ maxWidth: 345,}}>
          <CardActionArea onClick={() => handleOpenModal(pet)}>
            <CardMedia
              component="img"
              height="140"
              image={pet.image}
              alt={pet.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pet.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pet.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pet.age} years old
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pet.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
      {selectedPet && <PetModal open={true} handleClose={handleCloseModal} pet={selectedPet} />}
    </div>
  );
}
