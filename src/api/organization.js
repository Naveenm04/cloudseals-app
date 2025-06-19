export const createOrganization = async (orgData) => {
  try {
    const res = await fetch(`${ORG_API_BASE_URL}/organizations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer token' // if required
      },
      body: JSON.stringify(orgData),
    });

    if (!res.ok) {
      throw new Error('Failed to create organization');
    }

    return res.json();
  } catch (error) {
    console.error('Error creating organization:', error);
    throw error;
  }
};
