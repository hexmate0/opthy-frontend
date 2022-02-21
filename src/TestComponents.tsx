import React from "react";
import type { FC } from "react"
import { Box, Grid, Typography, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Page from './components/Page';


const dark = {
    // 50: '#F0F7FF',
    // 100: '#C2E0FF',
    // 200: '#A5D8FF',
    // 300: '#66B2FF',
    // 400: '#3399FF',
    // main: '#007FFF', // contrast 3.83:1
    // 500: '#007FFF',
    // 600: '#0072E5',
    // 700: '#0059B2',
    // 800: '#004C99',
    // 900: '#003A75',

    50: '#E2EDF8',
    100: '#CEE0F3',
    200: '#91B9E3',
    300: '#5090D3',
    main: '#5090D3',
    400: '#265D97',
    500: '#1E4976',
    600: '#173A5E',
    700: '#132F4C', // contrast 13.64:1
    800: '#001E3C',
    900: '#0A1929',
};



export const TestComponents: FC = () => {
    let row = [];
    for (const property in dark) {
        let color: string = dark[property];
        row.push(color);
    }

    return (
        <Page title="test">
            <Box alignItems="center"
                justifyContent="center">
                <Grid container spacing={2} >

                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                        >H2 </Typography>
                        <Typography
                            variant="h2"
                            color={'primary.main'}
                        >H2 primary.main</Typography>
                        <Typography
                            variant="h2"
                            color={'secondary.main'}
                        >H2 secondary.main</Typography>
                        <Typography
                            variant="h2"
                            color={'success.main'}
                        >H2 success</Typography>
                        <Typography
                            variant="h2"
                            color={'info.main'}
                        >H2 info.main</Typography>
                        <Typography
                            variant="h2"
                            color={'error.main'}
                        >H2 error.main</Typography>
                        <Typography
                            variant="h2"
                            color={'warning.main'}
                        >H2 warning.main</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        {row.map((val, i) => (
                            <p key={i} style={{ color: val }}>color check dark</p>
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                        {/* "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" */}
                        <Button sx={{ m: 2 }} variant="contained" color="primary">primary</Button>
                        <Button size="large" sx={{ m: 2 }} variant="contained" color="secondary">secondary large button text</Button>
                        <Button size="small" sx={{ m: 2 }} variant="contained" color="success">success</Button>
                        <Button size="medium" sx={{ m: 2 }} variant="contained" color="error">error</Button>
                        <Button sx={{ m: 2 }} variant="contained" color="info">info</Button>
                        <Button sx={{ m: 2 }} variant="contained" color="warning">warning</Button>

                        <Button sx={{ m: 2 }} variant="outlined" color="primary">primary</Button>
                        <Button sx={{ m: 2 }} variant="outlined" color="secondary">secondary</Button>
                        <Button sx={{ m: 2 }} variant="outlined" color="success">success</Button>
                        <Button sx={{ m: 2 }} variant="outlined" color="error">error</Button>
                        <Button sx={{ m: 2 }} variant="outlined" color="info">info</Button>
                        <Button sx={{ m: 2 }} variant="outlined" color="warning">warning</Button>
                    </Grid>
                </Grid>
            </Box>
        </Page>
    )
}