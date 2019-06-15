import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  }
}));

function truncate(str, charLimit){
  return str.length > charLimit ? str.substr(0, charLimit-1) + '…' : str;
}

const DealCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  let { id, expires_at, short_title, url, image_url, description } = props.deal;

  // <CardMedia
  //   className={classes.cover}
  //   image={image_url}
  //   title="deal image"
  // />

  return (
    <div className={classes.details} key={id}>
      <CardContent className={classes.content}>
        <Typography component="h6" variant="h6">
          {short_title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {truncate(description,150)}
        </Typography>
      </CardContent>

    </div>
  );
}

export default DealCard;
