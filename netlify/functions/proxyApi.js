// netlify/functions/proxyApi.js

export async function handler(event, context) {
  try {
    const { category = "general" } = event.queryStringParameters || {};

    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key not configured" }),
      };
    }

    const apiUrl = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&apikey=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch news from GNews" }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}