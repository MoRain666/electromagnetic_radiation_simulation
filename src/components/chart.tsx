import * as React from 'react';

import Chart from 'react-google-charts';
import { CircularProgress  } from '@material-ui/core';

export const ChartRes = () => {

  return (
    <Chart
        width={'100%'}
        height={'600px'}
        chartType='LineChart'
        loader={<CircularProgress />}
        data={[
          [
            'x',
            'Пропускание',
            'Отражение'
          ],
          [300, 20, 3],
          [400, 43, 0.5],
          [500, 45, 6],
          [600, 40, 20],
          [700, 38, 25.6],
          [800, 60, 15.6],
          [900, 65, 16.3],
        ]}
        options={{
          chart: {
            title: 'Box Office Earnings in First Two Weeks of Opening',
            subtitle: 'in millions of dollars (USD)',
          },
          hAxis: {
            title: 'Длина волны, мм'
          },
          vAxis: {
            title: 'Пропускание (отражение), %'
          },
          series: {
            1: { curveType: 'function' },
          }
        }}
        rootProps={{ 'data-testid': '3' }}
        />
  );
};
