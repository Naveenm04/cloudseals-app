// src/api/org.js

export const fetchOrganizations = async () => {
  try {
    const response = await fetch('http://localhost:8080/cloudseal/v1/api/organizations');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched organizations:', data); // ✅ You'll see this in browser console
    return data;
  } catch (error) {
    console.error('Error fetching organizations:', error);
    throw error;
  }
};
