import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


// //this is the test case
// it('renders without crashing', () => {
//   // first create a DOM element to render the component into
//   const div = document.createElement('div');
//   const testCard = { id: 'b', title: 'Second card', content: 'lorem ipsum' }
//   //render the component, this is the actual test, if something is wrong it will fail here
//   ReactDOM.render(<Card  key = {testCard.id} title = {testCard.title} content = {testCard.content}/>, div);
//   //clean up code
//   ReactDOM.unmountComponentAtNode(div);
// });




describe('<Card />', () => {
const testCard = { id: 'b', title: 'Second card', content: 'lorem ipsum' }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card  key = {testCard.id} title = {testCard.title} content = {testCard.content}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card key = {testCard.id} title = {testCard.title} content = {testCard.content}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});