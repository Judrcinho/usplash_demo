import React from 'react';
import { NavigationBar } from './components/navigationBar/navigationBar';
import ImageController from './controllers/imageController';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <NavigationBar />
        <ImageController />
      </div>
    );
  }
}


