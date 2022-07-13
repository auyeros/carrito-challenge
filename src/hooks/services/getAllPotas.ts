export const getAllPotas = async (): Promise<Potas[]> => {
  return fetch('http://localhost:3001/productos', {
    method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
      return error;
    })
  }