import { PotasFromBack } from "../types"

export const getAllPotas = (): Promise<PotasFromBack> => {
  return fetch('http://localhost:3001/productos').then(res => res.json())
}