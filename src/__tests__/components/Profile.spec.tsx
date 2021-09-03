import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../../components/Profile';

describe('Profile Component', () => {
  it('Should render twitter user', () => {
    const { getByText } = render(<Profile />);

    expect(getByText('@alanjanzu')).toBeInTheDocument();
  });
});
