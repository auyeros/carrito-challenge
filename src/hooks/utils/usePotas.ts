import { useEffect, useState, useCallback } from "react"
import { getAllPotas } from "../services/getAllPotas";

export const usePotas = () => {
  const [potas, setPotas] = useState<Potas[]>([]);
  
  const fetchData = useCallback(
    async () => {
    try{  
      const potasFromApi = await getAllPotas();

      setPotas(potasFromApi);
    } catch (error){
      console.log(error);
    }
  }, [setPotas]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return {
    potas
  }
  
}