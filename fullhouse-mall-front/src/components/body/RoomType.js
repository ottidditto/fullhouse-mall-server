import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Container from '@mui/material/Container';


function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="fullhouse-mall-front/src/images/slide-2.jpg"
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              침실
            </Typography>
            <Typography variant="body2" color="text.secondary">
              가구 보러가기
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ResponsiveGrid() {
    return (
      <Box sx={{ flexGrow: 29 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 18}}>
          {Array.from(Array(4)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
                    <ActionAreaCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

function RoomType() {
    
    return (
        <Container fixed>
            <h2>Room Type</h2>
            <ResponsiveGrid />
        </Container>
    )
}

export default RoomType;