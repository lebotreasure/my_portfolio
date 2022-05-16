import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./projects.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: 10,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="container">
        <h2 className="sub-heading">
          Projects <span className="title">Summary</span>{" "}
          <Divider variant="middle" />{" "}
        </h2>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>Rand Water tap-testing application</h2>

              <Typography>
                A system that will help schools test the water taps. Send the
                reports to Rand Water about the water that they did tests on.
                Rand water will be able to see the tests made on schools then
                they will know which taps they need to clean.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>E-commerce website</h2>

              <Typography>
                Making it easier for catering companies to get the bookings online.
                The bookings will be saved in the company's emails.
                A user will choose which type of booking they need it can be the equipment, food, decor services or a full package.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>Hospital application</h2>

              <Typography>
                A that will allow the receptionist to create appointments for patients. Patients to be able to get their prescriptions on time.
                Doctors to be able to see their schedule for the day.
                Doctors to be able to write the diagnosis and prescriptions for patients without having to use paper.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>SBI Mingle</h2>

              <Typography>
                I mostly worked on development of UI from wireframes/visual
                design, creating responsive grid,theming , followed best
                practices and coding standards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </div>
  );
}
