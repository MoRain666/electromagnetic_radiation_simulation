import * as React from 'react';
import { Typography, Table, TableHead, TableRow, TableBody, TableCell, FilledInput } from '@material-ui/core';

interface Props {
  layersCount: number;
}

export const Layers = ({ layersCount }: Props) => {

  const layers = [];

  for (let i = 0; i < layersCount; i++) {
    layers.push(
    <TableRow>
      <TableCell>{i + 1}</TableCell>
      <TableCell>{<FilledInput value={1} type='number' className='parametr-input' />}</TableCell>
      <TableCell>{<FilledInput value={0} type='number' className='parametr-input' />}</TableCell>
      <TableCell>{<FilledInput value={1} type='number' className='parametr-input' />}</TableCell>
    </TableRow>
    );
  }

  console.log(layers);

  return (
    <Typography component='div' className='container mainContainer'>
      <Typography component='h1' className='title'>Оптические параметры слоёв</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Слой</TableCell>
            <TableCell>Показатель преломления</TableCell>
            <TableCell>Показатель поглащения</TableCell>
            <TableCell>Оптическая толщина</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {layers}
        </TableBody>
      </Table>
    </Typography>
  );
};
