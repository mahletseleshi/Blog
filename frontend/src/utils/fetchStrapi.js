// src/utils/fetchStrapi.js
export async function fetchStrapi(endpoint) {
    const res = await fetch(`${process.env.STRAPI_URL}/api/${endpoint}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from Strapi: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  }
  