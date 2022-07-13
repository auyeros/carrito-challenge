export const getAllPotas = async (): Promise<Potas[]> => {
  return fetch('http://localhost:3001/productos').then(res => res.json())
}