import React from 'react';
import Typography from '@material-ui/core/Typography';


const Footer = () => {
    const today = new Date();

    return (
        <Typography variant="h1">
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
        </Typography>
    )
}

export default Footer;

