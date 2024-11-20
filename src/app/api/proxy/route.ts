// src/app/api/proxy/route.ts
import axios from 'axios';

// Define the GET function to fetch data from the external API
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  try {
    // API URL
    const apiUrl = 'https://api.socialverseapp.com/admin/dashboard';
    
    // Fetch data from the external API using axios
    const response = await axios.get(apiUrl);

    // Check if the API response contains valid data
    if (response.data) {
      // Return the JSON data from the external API
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // If no data is found, return an error message
      return new Response(
        JSON.stringify({ error: 'No data found from external API' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error) {
    // Catch any error during the fetch and return an error message
    console.error('API Fetch Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from external API' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
