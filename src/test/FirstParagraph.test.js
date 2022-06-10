import React from 'react'
import FirstParagraph from "../components/FirstParagraph";

// Jest stuff
import renderer from 'react-test-renderer'

// Enzyme stuff
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {configure, mount} from "enzyme";

configure({adapter: new Adapter()});

it('Example test - using Jest', () => {
    const component = renderer.create(
        <FirstParagraph/>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

it('Example test - using enzyme', () => {
    const wrapper = mount(<FirstParagraph/>);
    const p = wrapper.find('.firstParagraph');

    expect(p.text()).toBe("Hey, you did it!")
});