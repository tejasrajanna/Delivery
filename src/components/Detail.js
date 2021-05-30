import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
    root: {
      minWidth: 160,
      zIndex:5,
  },
  });
 
//On click of location pin this card becomes visible which displays details of delivery  

function Detail({info,setVisible}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
          <CardHeader
              action={
                <IconButton
                  style={{color:"red"}} 
                  onClick={()=>{setVisible(false)}} > 
                  <DeleteIcon fontSize="small"/> 
                </IconButton>
              }
              titleTypographyProps={{variant:'h6'}}
              title={(info.seq)?`Priority: ${info.seq}`:"Missing Priority"}
              subheader={<span> 
                <span 
                style= {{color:"indigo"}}> 
                {(info.customerInfo)?`Name:${info.customerInfo.split(/,(.+)/)[0]}`:"Missing Name"}  
                </span>  <br/>
                <span style={{color:"#33691e"}}> 
                  {(info.customerInfo)?`Delivery Address:${info.customerInfo.split(/,(.+)/)[1]}`:"Missing Address"}
                </span> 
            </span>}
              />
    </Card>
  )
}

export default Detail;
