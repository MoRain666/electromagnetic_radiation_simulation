import * as React from 'react';
import { Typography, Paper, Divider, FilledInput } from '@material-ui/core';

interface Props {
  layersCount: number;
  layersOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Parameters = ({ layersCount, layersOnChange }: Props) => {
  return (
    <Typography component='div' className='container mainContainer parametrs-container-main'>
      <Typography component='h1' className='title'>
        Общие параметры
      </Typography>
      <Paper component='div' className='container parametrs-container'>
        <Typography className='parametr' component='div'>
          <Typography component='h2'>Количество слоёв:{' '}</Typography>
          <FilledInput value={layersCount || ''} onChange={layersOnChange} type='number' className='parametr-input' />
        </Typography>
        <Divider style={{ width: '100%' }} />
        <Typography className='parametr' component='div'>
          <Typography component='h2'>Показатель преломления среды:{' '}</Typography>
          <FilledInput type='number' className='parametr-input' />
        </Typography>
        <Divider style={{ width: '100%' }} />
        <Typography className='parametr' component='div'>
          <Typography component='h2'>Показатель преломления подложки:{' '}</Typography>
          <FilledInput type='number' className='parametr-input' />
        </Typography>
        <Divider style={{ width: '100%' }} />
        <Typography className='parametr' component='div'>
          <Typography component='h2'> Угол падения (град.):{' '}</Typography>
          <FilledInput type='number' className='parametr-input' />
        </Typography>
      </Paper>
    </Typography>
  );
};
