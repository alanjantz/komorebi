import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../../components/Profile';
import config from '../../../data/config';

describe('Profile Component', () => {
  it('Should render twitter user', () => {
    const { getByText } = render(<Profile />);

    expect(getByText(config.siteTitle)).toBeInTheDocument();
  });
});
