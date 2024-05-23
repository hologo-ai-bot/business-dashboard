// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
// types
import PropTypes from 'prop-types';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const AccessToken = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.warning.light,
                                            color: theme.palette.warning.dark
                                        }}
                                    >
                                        <KeyIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0,
                                        mt: 0.45,
                                        mb: 0.45
                                    }}
                                    primary={
                                        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                                            <Grid item xs={10}>
                                                <TextField fullWidth size="small" label="Access token" id="fullWidth" />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Button variant="outlined">Save</Button>
                                            </Grid>
                                        </Grid>
                                    }
                                    // primary={<Typography variant="h4">$203k</Typography>}
                                    // secondary={
                                    //     <Typography
                                    //         variant="subtitle2"
                                    //         sx={{
                                    //             color: theme.palette.grey[500],
                                    //             mt: 0.5
                                    //         }}
                                    //     >
                                    //         Total Income
                                    //     </Typography>
                                    // }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

AccessToken.propTypes = {
    isLoading: PropTypes.bool
};

export default AccessToken;
