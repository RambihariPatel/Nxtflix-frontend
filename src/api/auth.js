/**
 * Authentication API
 * This file handles the login API call to the server
 */

const LOGIN_URL = "https://serverless-api-teal.vercel.app/api/auth/signin";

// Function to login the user with email and password
export async function loginUser(email, password) {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  console.log("API Response:", result); // for debugging

  // Check success field in the response body
  if (result.success === false) {
    throw new Error(result.message || result.error || "Invalid email or password");
  }

  // If success is true, return the full result
  if (result.success === true) {
    return result;
  }

  // Fallback: if response is not ok at all
  if (!response.ok) {
    throw new Error(result.message || "Something went wrong. Please try again.");
  }

  return result;
}
