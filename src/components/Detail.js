import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Cancel';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
  },

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
  });
  

function Detail({info,setVisible}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
          <CardHeader
              action={
                <IconButton
                  style={{color:"red"}} 
                  onClick={()=>{setVisible(false)}} > 
                  <DeleteIcon/> 
                </IconButton>
              }
              title={info.name?info.name:'Name missing'}
              subheader={`TaskId=${info.taskId?info.taskId:'missing'}`}
              />
      <CardContent>
        <Typography variant="body2" color="textPrimary" >
          {`Customerinfo=${info.customerInfo?info.customerInfo:'missing'}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Detail;
