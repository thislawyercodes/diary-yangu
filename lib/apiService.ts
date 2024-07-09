import { getToken, saveToken } from "./baseService";

const BASE_URL = 'https://51ea-105-163-156-99.ngrok-free.app'; 

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



export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Something went wrong');
    }

    const data = await response.json();
    const token = data.access; 
    await saveToken(token);
    return data; 
  } catch (error: any) {
    throw new Error(error.message || 'Failed to login');
  }
};



export const logout = async () => {
  try {
    // await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    throw new Error('Failed to logout');
  }
};


export const fetchEntries = async (token?: string, start?: string, end?: string) => {
  try {
     const token = await getToken(); 
    console.log("saved token: ", token);

    let queryParams = '';
    if (start) queryParams += `start=${start}&`;
    if (end) queryParams += `end=${end}&`;

    console.log(queryParams);

    const url = `${BASE_URL}/journal/new-entry/?${queryParams}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch entries');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw new Error('Error fetching entries');
  }
};



export const addEntry = async (token?: any, entryData?: any) => {
  try {
    const savedToken = await getToken();
    console.log("saved token: ", savedToken);

    const url = `${BASE_URL}/journal/new-entry/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${savedToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryData),
    });

    if (!response.ok) {
      throw new Error('Failed to add entry');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding entry:', error);
    throw new Error('Error adding entry');
  }
};


export const fetchCategories = async (token?: string) => {
  try {
     const token = await getToken(); 
    console.log("saved token: ", token);

    const url = `${BASE_URL}/journal/category`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch entries');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw new Error('Error fetching entries');
  }
};

export const addCategory = async (token?: any, categoryDate?: any) => {
  try {
    const savedToken = await getToken();
    console.log("saved token: ", savedToken);

    const url = `${BASE_URL}/journal/category`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${savedToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryDate),
    });

    if (!response.ok) {
      throw new Error('Failed to adcategoryd ');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw new Error('Error adding category');
  }
};


export const editEntry = async (token?:any,id?:string, entryData?:any) => {
  try {
    const token = await getToken();
    const url = `${BASE_URL}/journal/entry/${id}/`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit entry');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error editing entry:', error);
    throw new Error('Error editing entry');
  }
};


export const deleteEntry = async (token?:any,id?:string) => {
  try {
    const token = await getToken();
    const url = `${BASE_URL}/journal/entry/${id}/`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete entry');
    }

    return { success: true };
  } catch (error) {
    console.error('Error deleting entry:', error);
    throw new Error('Error deleting entry');
  }
};
