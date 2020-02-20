import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
});

export default function DirectorCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Film director"
         // height="140"
          image="https://yt3.ggpht.com/a/AGF-l79gh-zsahfnOWMVkxBCG3I1lxq8m3W0SYMe9A=s288-c-k-c0xffffffff-no-rj-mo"
          title="Film director"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Юрий Хащеватский
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <p>Дата рождения: 1947-10-18</p>
            {(1) ? null: <p>Дата смерти: </p>}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}



