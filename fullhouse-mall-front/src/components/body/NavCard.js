import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={ // 이미지 경로는 상대경로로 설정하고, require()로 가져와야함.
              require('../../images/slide-3.jpg')
            }
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              세트장
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

function FullBorderedGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        // spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {[...Array(4)].map((_, index) => (
          <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 2 }} minHeight={160}>
            <ActionAreaCard />
          </Grid>
        ))}
      </Grid>
      <Grid xs={12} md={6} lg={4}>
        <ActionAreaCard />
        </Grid>
    </Box>
  );
}


function NavCard() {
    return (
        <React.Fragment>
            <Container fixed>
                <h2>NavCard</h2>
                <FullBorderedGrid />
            </Container>

        </React.Fragment>
    )
}

export default NavCard;