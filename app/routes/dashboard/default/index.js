import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import EarningCard from 'components/dashboard/EarningCard';
import TotalOrderLineCard from 'components/dashboard/TotalOrderLineCard';
import TotalIncomeDarkCard from 'components/dashboard/TotalIncomeDarkCard';
import TotalIncomeLightCard from 'components/dashboard/TotalIncomeLightCard';
import AccessToken from 'components/dashboard/AccessToken';
import TotalGrowthBarCard from 'components/dashboard/TotalGrowthBarCard';
import PopularCard from 'components/dashboard/PopularCard';
// meta export
export const meta = () => ({
    title: 'Dashboard ',
    description: ''
});

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}></Grid>
                    <Grid item sm={6} xs={12} md={6} lg={12}>
                        <AccessToken isLoading={isLoading} />
                    </Grid>
                </Grid>
                {/* <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarCard isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid> */}
            </Grid>
        </Grid>
    );
};

export default Dashboard;
