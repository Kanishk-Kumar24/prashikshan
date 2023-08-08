import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Nav from "./Nav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import "../dash.css";
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const Home = () => {
  return (
    <>
      <Nav />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                <Card sx={{minWidth: 49 + "%", height: 140}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                   
                  </CardContent>
                </Card>
               
                <Card sx={{minWidth: 49 + "%", height: 140}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                   
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }}>
                
                  <Stack spacing={2} direction={"row"}>
                    <div className="iconstyle"><PendingActionsIcon/></div>
                   <div className="paddingall">
                     <span className="pricetitle">203k</span><br/>
                     <span className="pricesubtitle">Total income</span>
                   </div>
                   </Stack>
                  
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  
                  <Stack spacing={2} direction={"row"}>
                    <div className="iconstyle"><PendingActionsIcon/></div>
                   <div className="paddingall">
                     <span className="pricetitle">203k</span><br/>
                     <span className="pricesubtitle">Total income</span>
                   </div>
                   </Stack>
                  
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
