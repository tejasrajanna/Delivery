import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 341; 
const smallWidth= 200;  //for mobile devices

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
      width:smallWidth,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      height: `calc(100% - 64px)`,
      top:64,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      alignItems: "center",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width:smallWidth,
      [theme.breakpoints.up('sm')]:{
    width: drawerWidth,
    height: `calc(100% - 64px)`,
    top:64,
  },
},
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
 leftpanel: {
      borderBottom:"solid 1px grey",
  },
  head: {
    borderBottom:"solid 2px black",
  },
}));
function ResponsiveDrawer({data,setSeq}) {
  
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false); //hidden sidebar for mobile devices

function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
    <div>  
      <List>
      {/* Sidebar which has list of tasks and on click of any task map is centered on that task
        Some additional information such as address and ID displayed along with sequence number*/
      }
      <Typography variant="h5" align="center" color="secondary" className={classes.head}>Task List</Typography>
      {data.map((item) => (
            <div className={classes.leftpanel} key={item.seq}>
              <ListItem button  
              onClick={()=>{setSeq(item.seq)} } >
                  <ListItemText  
                  primary={(item.seq)?`Priority: ${item.seq}`:"Missing Priority"} 
                  secondary={<span> 
                                <span style= {{color:"#26a69a"}}> 
                                {(item.taskId)?`Task ID:${item.taskId}`:"Missing ID"}  
                                </span>  <br/>
                                <span> 
                                    {(item.customerInfo)?`Address:${item.customerInfo.split(/,(.+)/)[1]}`:"Missing ID"}
                                </span> 
                            </span>} />
              </ListItem>
            </div>
            ))}
      </List>
    </div>
  );
return (
    <div className={classes.root}>
      <CssBaseline />
      {/*App bar is permanent banner present at the top of the screen*/ }
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            Delivery
          </Typography>
        </Toolbar>
      </AppBar>
      
{/* Sidebar hidden on mobile screens, can be accessed by the click of a button*/}
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>

{/* Sidebar permanent on larger screens */}
<Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;