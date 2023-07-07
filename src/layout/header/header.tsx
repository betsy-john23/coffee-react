
import * as React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, Box, styled } from "@mui/material";


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '@media all': {
        minHeight: 30,
    },
}));

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <StyledToolbar className="header-bgc">
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end' }}>
                        Coffee
                    </Typography>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}
export default Header;
