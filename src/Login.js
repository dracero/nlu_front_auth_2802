import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Login = () => {
  return(
    <Box m={0} pt={0}>
      <Button href="http://localhost:8080/auth/google" variant="outlined">Login</Button>
    </Box>
  )
};

export default Login;