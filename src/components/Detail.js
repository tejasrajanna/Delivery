import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      zindex: 100,
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
  });
  

function Detail({info,setVisible}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}  variant="outlined">
      <CardContent>
      <CardActions>
        <IconButton size="small"  style={{color:"red"}} 
        onClick={()=>{setVisible(false)}} > 
        <DeleteIcon /> </IconButton>
      </CardActions>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`TaskId=${info.taskId}`}
        </Typography>
        <Typography variant="h5" component="h2">
          {`Name=${info.name}`}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {`Sequence=${info.seq}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Customerinfo=${info.customerInfo}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Detail;
