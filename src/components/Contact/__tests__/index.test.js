import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);
describe('Contact is rendering', () => {
    it('renders', () => {
      render(<ContactForm />);
    });
  
    it('renders h1', () => {
      const { getByTestId } = render(<ContactForm />)
      expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
  
    it('matches snapshot', () => {
      const { asFragment } = render(<ContactForm />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders submit button', () => {
        const {getByTestId} = render(<ContactForm />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
  })