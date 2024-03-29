import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Employee } from '../Constant/constants';
import { LoginContext } from '../contexts/LoginContext';

interface EmployeeDetailsProps {
    detailIndex: number;
    handleDelete: any;
    handleEdit: any;
    employeeData: Employee[] | any;
    setEmployeeData: React.Dispatch<React.SetStateAction<Employee[]>> | any;
}

const getDateFunc = (data: string) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const result = `${day}/${month}/${year}`;
    return result;
};

const EmployeeDetails: React.FC<EmployeeDetailsProps> = (props: EmployeeDetailsProps) => {
    const { userType, setUserType } = React.useContext(LoginContext);
    const { employeeData, setEmployeeData, detailIndex, handleDelete, handleEdit } = props;

    const handleDeleteIndex = (index: number) => {
        handleDelete(index);
    };
    const handleEditIndex = (index: number) => {
        handleEdit(index);
    };

    return (
        <Card sx={{ width: 'auto', m: 5 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <div style={{ display: 'block' }}>First Name : {employeeData?.firstName}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            <div style={{ display: 'block' }}>Last Name : {employeeData.lastName}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            <div style={{ display: 'block' }}>Email : {employeeData.email}</div>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            <div style={{ display: 'block' }}>Phone nunmber : {employeeData.phoneNumber}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            <div style={{ display: 'block' }}>Gender : {employeeData.gender}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            <div style={{ display: 'block' }}>Join Date : {getDateFunc(employeeData.joinDate)}</div>
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ display: userType === 'admin' ? 'flex' : 'none', flexDirection: 'row-reverse' }}>
                    <Button style={{ marginTop: 5, marginLeft: 10 }} variant="contained" onClick={() => handleDeleteIndex(detailIndex)}>
                        Delete
                    </Button>
                    <Button style={{ marginTop: 5 }} variant="contained" onClick={() => handleEditIndex(detailIndex)}>
                        Edit
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default EmployeeDetails;
