import React from 'react';
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import Centre from "./Centre";

function Login() {
    return (
        <Centre>
            <Card sx={{width:400}}>
                <CardContent sx={{textAlign:'center'}}>
                    <Typography variant="h3" sx={{my:3}}>Quiz App</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m:1,
                            width:.90
                        }
                    }}>
                        <form noValidate>
                            <TextField label="Email" name="email" variant="outlined"/>
                            <TextField label="Name" name="name" variant="outlined"/>
                            <Button type="submit" variant="contained" size="large"
                                    sx={{width:.9}}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Centre>
    );
}

export default Login;