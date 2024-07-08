const BASE_URL = 'http://127.0.0.1:8000'; 

export const signup = async (first_name: string, last_name: string, email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      }),
    });

    console.log("response: " , JSON.stringify(response))

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Something went wrong');
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
