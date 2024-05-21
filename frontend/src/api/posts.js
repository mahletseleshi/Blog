// api/posts.js

import axios from "axios";

export async function fetchAllPosts() {
  try {
    const response = await axios.get("http://localhost:1337/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
