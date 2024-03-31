import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import data from '../data/index.json';

export default function MultiActionAreaCard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', justifyContent: 'center', padding: '150px', alignItems: 'stretch' }}>
      {data?.pets?.map((pet, index) => (
        <Card key={index} sx={{ maxWidth: 345, border: '1px solid transparent' }}>
          <CardActionArea>
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
    </div>
  );
}
