import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Logout = () => {
  return(
    <Box m={0} pt={0}>
      <Button href="http://localhost:8080/logout" variant="outlined">Logout</Button>
    </Box>
  )
};

export default Logout;