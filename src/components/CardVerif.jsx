import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    Width: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function CardVerif(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent >
        <Typography variant="h5" component="h2">
        Pendaftar Diterima
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Jumlah
        </Typography>
        <Typography variant="h4">
          80
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Lihat Daftar</Button>
      </CardActions>
    </Card>
  );
}

CardVerif.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardVerif);