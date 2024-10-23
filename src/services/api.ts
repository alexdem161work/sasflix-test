import axios from 'axios';

export const call = async (url: string, method: 'get' | 'post') => {
  try {
    const response = await axios({
      method,
      url: `https://dummyjson.com/${url}`,
    })

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Получение данных с API методом GET
export const get = (url: string) => call(url, 'get')
