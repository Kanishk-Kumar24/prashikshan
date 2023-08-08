import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Nav from "./Nav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import "../dash.css";
import Typography from "@mui/material/Typography";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import AccordianDash from "./AccordianDash"



const Home = () => {
  return (
    <>
    <div className="bgcolor">
    <Nav />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient"
                >
                  <CardContent>
                    <div className="iconstyle">
                      <PendingActionsIcon />
                    </div>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}
                    >
                      Approval Level 1 Pendency
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Percentage: 20%
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradientlight"
                >
                  <CardContent>
                    <div className="iconstyle">
                      <AutorenewIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}
                    >
                      Approval Level 2 Pendency
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Percentage: 50%
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card className="gradientlight">
                  <Stack spacing={2} direction={"row"}>
                    <div className="iconstyle">
                      <UnpublishedIcon />
                    </div>

                    <div className="paddingall">
                      <span className="pricetitle">Rejected</span>
                      <br />
                      <span className="pricesubtitle">Percentage: 5%</span>
                    </div>
                  </Stack>
                </Card>
                <Card>
                  <Stack spacing={2} direction={"row"}>
                    <div className="iconstyleblack">
                      <DoneAllIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">Accepted</span>
                      <br />
                      <span className="pricesubtitle">Percentage: 25%</span>
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
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent><AccordianDash/></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
     
    </>
  );
};

export default Home;
