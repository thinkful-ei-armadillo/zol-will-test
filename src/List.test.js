import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from './STORE';

//this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
    const testList =     {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      };
  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List key={testList.id} header={testList.header} cards={testList.cardIds.map(id => STORE.allCards[id])}/>, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});