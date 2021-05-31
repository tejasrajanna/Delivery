import React, {useState,useEffect} from 'react';
import Map from "./components/Map";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drawer from "./components/ResponsiveDrawer";

function numb(no)  //check if all sequence numbers missing
{
    if (no === Number.MAX_VALUE)
    {
        return null;
    }
    else return no;
}

function seqmin(info) //find minimum sequence number 
{
    return (info.reduce((min, p) => p.seq < min ? p.seq : min, Number.MAX_VALUE));
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
    },
  },
}));

export default () => {
  
  const classes = useStyles();
  const [data, setData] = useState(null); //storing fetched data
  const [loading, setLoading] = useState(true); //to display loading screen while fetching data
  const [error, setError] = useState(null); //log errors
  const[seq,setSeq]=useState(null); //to zoom in on specific task

useEffect(() => {
    fetch('http://ec2-13-126-90-72.ap-south-1.compute.amazonaws.com:8082/user/1/tasks/')
            .then((response) => {
            if (response.ok) {
            return response.json();
            }
            })
            .then((data) => {
              setData(data);
              const min=seqmin(data);  
              setSeq(min);}
            )
            .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
            })
            .finally(() => {
            setLoading(false);
            });
            }, []);

if (loading) return "Loading...";

//Window Alert if there is error fetching data but components still rendered with empty data

  return (
    <div className={classes.root}>
      {error? 
      <div>
        <Grid container>
        <Grid item sm={3}>
          <Paper>
              <Drawer data={[]} setSeq={setSeq}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <Map data={[]}   
            seqno={seq}
           />
          </Paper>
        </Grid>
     </Grid>
         {window.alert("Data missing/empty on backend")}   
      </div>:
      <div>
      <Grid container >
        <Grid item sm={3}>
          <Paper>
              <Drawer data={data} setSeq={setSeq}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <Map data={data}   
            seqno={numb(seq)}
           />
          </Paper>
        </Grid>
     </Grid>
    </div>
   }
    </div>
  );
}