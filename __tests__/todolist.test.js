import React from 'react';
import ToDoList from '../src/ToDoList';
import renderer from 'react-test-renderer';

test('Adding New Item to the List', () => {
    const component = renderer.create(
        <ToDoList/>
    );
    const root = component.root;
    const instance = root.instance;

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Manually add "Hello" to state
    instance.setState({ newItem: "Hello" });
    expect(tree).toMatchSnapshot();

    // Button
    const button = root.findByProps({id: "addButton"});
    button.props.onClick();
    expect(tree).toMatchSnapshot();
});