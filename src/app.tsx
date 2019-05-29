import * as React from 'react';
import { Container, Tabs, Tab, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ root: { flexGrow: 1, backgroundColor: theme.palette.background.paper } }));

export const App = () => {

  const [ value, setValue ] = React.useState(0);

  const handleTabChange = (e: React.ChangeEvent<{}>, value: number) => {
    setValue( value );
  };

  const classes = useStyles();

  return (
    <Container>
      <Tabs className={classes.root} textColor='primary' indicatorColor='primary' variant='fullWidth' value={value} onChange={handleTabChange}>
        <Tab className='text' label='1' />
        <Tab className='text' label='2' />
        <Tab className='text' label='3' />
      </Tabs>
      <Typography>{value}</Typography>
    </Container>
  );
};