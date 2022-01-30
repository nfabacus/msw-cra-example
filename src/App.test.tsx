import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders posts', async() => {
  render(<App />);
  const userTitle = await screen.findByText("User");
  const username = await screen.findByText("Mr. Tester");

  const postsTitle = await screen.findByText("Posts");
  const dataTitle1 = await screen.findByText(/This is a mock data 001/i);
  const dataTitle2 = await screen.findByText(/This is a mock data 002/i);

  expect(userTitle).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(postsTitle).toBeInTheDocument();
  expect(dataTitle1).toBeInTheDocument();
  expect(dataTitle2).toBeInTheDocument();
});
