import React, { Component } from 'react';
import renderer from 'react-test-renderer'
import Form from '../screens/Form/index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Form', () => {

    let component;


    beforeEach(function () {
        component = shallow(<Form />)
        textInput = component.find('TextInput')
    });

   

    it('should change state if firstname is entered', () => {
        const instance = renderer.create(<Form />).getInstance();

        instance.handleFirstName('firstName')
        expect(instance.state.firstName).toEqual('firstName')


    })

    it('check button click', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Form handleLoginPress={mockCallBack} />));

        expect(button.state('firstName')).toEqual('');

        let firstName = button.find('test')
        expect(firstName).toHaveLength(1);
        firstName.first().props().onChangeText('firstName');
     

        let loginButton = button.find('[testID="loginButton"]')
        expect(loginButton).toHaveLength(1);
        loginButton.first().props().onPress()
      
    })


})

