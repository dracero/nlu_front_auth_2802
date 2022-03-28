import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Login = () => {
  const auth = () =>{
    let myHeaders = new Headers();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
   fetch("https://backend0322.herokuapp.com/auth/google", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
  }

  return(
    <Box m={0} pt={0}>
      <Button onClick={auth()} variant="outlined">Login</Button>
    </Box>
  )
};

export default Login;