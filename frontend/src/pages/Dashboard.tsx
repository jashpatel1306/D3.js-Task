import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import BarChart from "../components/BarChart";
import { fetchCustomerType, fetchAccountIndustry, fetchTeamData } from "../services/api";

const Dashboard: React.FC = () => {
  const [customerData, setCustomerData] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetchCustomerType().then(setCustomerData);
    fetchAccountIndustry().then(setIndustryData);
    fetchTeamData().then(setTeamData);
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Customer Type Data */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Customer Type Data</Typography>
            <BarChart data={customerData} />
          </CardContent>
        </Card>
      </Grid>

      {/* Account Industry Data */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Account Industry Data</Typography>
            <BarChart data={industryData} />
          </CardContent>
        </Card>
      </Grid>

      {/* Team Data */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Team Data</Typography>
            <BarChart data={teamData} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
