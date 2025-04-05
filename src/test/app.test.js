import { render, screen, waitFor } from '@testing-library/react';
import App from '../../src/app';
import axios from 'axios';
import example_api_response from '../../example_api_response.json';
import React from 'react';

jest.mock('axios');
jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

describe('App Component', () => {
  it('Resolve data and renders it correctly', async () => {
    axios.get.mockResolvedValue({ data: example_api_response });

    render(<App />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  });

  it('displays an error message when data fetching fails', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    axios.get.mockRejectedValue(new Error('Failed to fetch data'));
  
    render(<App />);
  
    await screen.findByText(/Loading.../);
  
    expect(consoleErrorSpy).toHaveBeenCalledWith( "Energy generation data couldn't be obtained", expect.any(Error));
  
    consoleErrorSpy.mockRestore();
  });
});
