//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

//components
import Card from '../components/Card';

describe(Card, () => {
  let component;
  const mockOnFlip = jest.fn();

  /*
  * ========================
  * rendering
  * ========================
  */

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card id={0} image="img" open={false} onFlip={mockOnFlip} />, div);
  });

  /*
  * ========================
  * methods and states
  * ========================
  */

  it('calls the passed in onFlip function when card (div) is clicked', () => {
    component = shallow(<Card id={0} image="img" open={false} onFlip={mockOnFlip} />);
    component.find('div.App-card').simulate('click');
    expect(mockOnFlip).toBeCalled();
  });

  it('check if the class cardFlipped is added if open is true', () => {
    component = shallow(<Card id={0} image="img" open={true} onFlip={mockOnFlip} />);
    expect(component.find('div.App-card.cardFlipped')).toHaveLength(1);
  });

});
