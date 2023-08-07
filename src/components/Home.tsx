import Navbar from "./Navbar";
import Box from "@mui/material/Box";


const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Hello</h1>
        </Box>
      </Box>
    </>
  );
};

export default Home;
