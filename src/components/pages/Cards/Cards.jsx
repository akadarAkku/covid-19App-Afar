import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <h3 className="cardHeader" style={{color:'#808000'}}>Baad caddol KOVID-19 gufeh yan caddo.</h3>
      <Grid container spacing={3} justify="center" style={{marginTop: '10px'}}>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)} style={{backgroundColor: '#EEE'}}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Biyaakittam
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              T ayro fan Vayres elle geytime mara.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)} style={{backgroundColor: '#EEE'}}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             Qaffottem
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
             Ta ayro fan caddol qaffootem.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)} style={{backgroundColor: '#EEE'}}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             Rabtem
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Ta ayro fan rabe marih loowo
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
