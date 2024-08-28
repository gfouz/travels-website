import { FlightType } from '../../schemas/flight.schema.ts';

export const createFlightService = async (
  data: FlightType,
  token: string | undefined,
) => {
  const url = 'http://127.0.0.1:8000/api/flights/create-flight';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
