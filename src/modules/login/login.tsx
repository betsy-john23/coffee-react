import { Paper, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap'
import LOGO from '../../assets/images/coffee-logo.png';
const LoginPage = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(event.target.checked);
    };

    return (
        <Container>
            <Row>
                <Col offset={4}></Col>
                <Col sm={4}>
                    <Paper className="login-box-spacing">
                        <Grid
                            container
                            spacing={3}
                            direction={'column'}
                            alignContent={'center'}
                        >
                            <Grid item xs={12} >
                                <Row>
                                    <Col sm={5}></Col>
                                    <Col sm={4}><img src={LOGO} width="30" /></Col>
                                    <Col offset={3}></Col>
                                </Row>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Username" className="login-input-bx"></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Password" className="login-input-bx" type={'password'}></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    }
                                    label="Keep me logged in"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Row>
                                    <Col sm={2}></Col>
                                    <Col sm={3}>
                                        <Button variant="outlined" className='login-btn'>Login</Button>
                                    </Col>
                                    <Col offset={3}></Col>
                                </Row>
                            </Grid>
                        </Grid>
                    </Paper>
                </Col>
                <Col offset={4}></Col>
            </Row>
        </Container>

    );
};

export default LoginPage;
