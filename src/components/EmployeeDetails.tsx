import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface EmployeeDetailsProps {
    setEmployeeData: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                firstName: string;
                lastName: string;
                email: string;
                phoneNumber: string;
                gender: string;
                joinDate: string;
            }[]
        >
    >;
    employeeData: any | string | number;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employeeData, setEmployeeData }: EmployeeDetailsProps) => {
    return (
        <Card sx={{ width: 'auto', m: 5 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {employeeData.firstName}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {employeeData.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {employeeData.email}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {employeeData.phoneNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {employeeData.gender}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {employeeData.joinDate}
                        </Typography>
                    </Grid>
                </Grid>
                <Button variant="contained">Edit</Button>
            </CardContent>
        </Card>
    );
};

export default EmployeeDetails;
