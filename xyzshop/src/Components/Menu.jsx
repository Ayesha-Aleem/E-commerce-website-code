import React from 'react'
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button"
import { AppBar, Toolbar, Typography } from '@material-ui/core';
const Menu = () => {

    return ( 
     <AppBar>
         <Toolbar color="Grey">
             <Typography variant="h3">
               <Link to="/home">Home</Link>
               <Link to="/products">Products</Link>
               <Link to="/contact">Contact us</Link>
               <Link to="/login">Login</Link>
               <Button variant="contained" color="secondary">Signup</Button>
             </Typography>
         </Toolbar>
     </AppBar>
        );
}
 
export default Menu; <div>
</div>