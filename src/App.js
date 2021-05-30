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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[seq,setSeq]=useState(null);

useEffect(() => {
    fetch('http://127.0.0.1:8000/test')
            .then((response) => {
            if (response.ok) {
            return response.json();
            }
            })
            .then((data) => {
              setData(data);
            
              const min=seqmin(data)  
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
if (error) return "Error!";

  return (
    <div className={classes.root}>
      <Grid container direction="row" alignItems="stretch">
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
  );
}