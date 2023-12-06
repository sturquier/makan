import React from 'react';
import { render } from '@testing-library/react';
import AppRouter from './AppRouter';

test('renders without crashing', () => {
  const { baseElement } = render(<AppRouter />);
  expect(baseElement).toBeDefined();
});
