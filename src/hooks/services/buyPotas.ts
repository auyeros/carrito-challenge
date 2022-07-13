export const buyPotas = async (idPotas: number[]): Promise<boolean> => {
  return fetch("http://localhost:3001/compras", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({potasId: idPotas}),
  })
  .then(res => res.json())
  .catch(error => {
    console.log(error)
    return false;
  })}