import * as React from 'react';

import { Button, TextInput, ProgressCircle } from 'react-desktop/windows';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2 className='title'>Welcome to React with Typescript!</h2>
        <Button type='button'  push onClick={() => console.log('works!')}>
          press me
        </Button>
        <TextInput
          theme='dark'
          background
          color='#cc7f29'
        />
        <ProgressCircle size={100} />
      </div>
    );
  }
}
