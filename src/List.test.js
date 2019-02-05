import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './STORE';


// //this is the test case
// it('renders without crashing', () => {
//   // first create a DOM element to render the component into
//   const div = document.createElement('div');
//     const testList =     {
//         id: '2',
//         header: 'Second list',
//         cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
//       };
//   //render the component, this is the actual test, if something is wrong it will fail here
//   ReactDOM.render(<List key={testList.id} header={testList.header} cards={testList.cardIds.map(id => STORE.allCards[id])}/>, div);
//   //clean up code
//   ReactDOM.unmountComponentAtNode(div);
// });



describe('<List />', () => {
  const testList =     {
    id: '2',
    header: 'Second list',
    cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={testList.id} header={testList.header} cards={testList.cardIds.map(id => STORE.allCards[id])}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List key={testList.id} header={testList.header} cards={testList.cardIds.map(id => STORE.allCards[id])}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});