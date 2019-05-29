import * as React from 'react';
import { Container, Tabs, Tab, makeStyles  } from '@material-ui/core';
import { Parameters, Layers, ChartRes } from './components';

const useStyles = makeStyles((theme) => ({ root: { flexGrow: 1, backgroundColor: theme.palette.background.paper } }));

export const App = () => {

  const [ value, setValue ] = React.useState(0);
  const [layersCount, setLayersCount] = React.useState(0);

  const handleTabChange = (e: React.ChangeEvent<{}>, value: number) => {
    setValue( value );
  };

  const handleLayersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLayersCount(parseFloat(e.target.value));
  }

  const classes = useStyles();

  return (
    <Container>
      <Tabs className={classes.root} textColor='primary' indicatorColor='primary' variant='fullWidth' value={value} onChange={handleTabChange}>
        <Tab className='text' label='Настройка общих параметров' />
        <Tab className='text' label='Настройка слоёв' />
        <Tab className='text' label='Результат моделирования' />
      </Tabs>
      {value === 0 && <Parameters layersOnChange={handleLayersChange} layersCount={layersCount}/>}
      {value === 1 && <Layers layersCount={layersCount}/>}
      {value === 2 && <ChartRes />}
    </Container>
  );
};