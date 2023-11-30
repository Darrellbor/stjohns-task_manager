import React from 'react';
import * as stories from '../Modal.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import values from '../values';

const { ModalComplete } = composeStories(stories);
const { language } = values;
const ModalTestId = 'test-Modal';
const ModalCloseId = 'modal-close';

describe('Modal atom', () => {
  describe('Modal Complete', () => {
    beforeEach(() => {
      render(<ModalComplete />);
    });

    test('it renders', () => {
      const element = screen.getByTestId(ModalTestId);
      expect(element).not.toBeNull();
    });

    test('modal title rendered', async () => {
      const element = await screen.findByText(language.en.modalTitle);
      expect(element).toBeInTheDocument();
    });

    test('modal content rendered', () => {
      const element = screen.getByText(language.en.modalBody);
      expect(element).toBeInTheDocument();
    });

    test('modal close button rendered when showCloseBtn prop is true', () => {
      const element = screen.getByTestId(ModalCloseId);
      expect(element).toBeInTheDocument();
    });
  });
});
