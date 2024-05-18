import { useState, useEffect } from "react"

/* Ce code en React définit un hook personnalisé appelé useFetchData qui prend en paramètre une URL. Ce hook effectue
 une requête à cette URL pour récupérer des données et les met à jour dans un state data en utilisant useState.
Le hook utilise useEffect pour déclencher la requête une fois que le composant est monté. Dans la fonction fetchData, 
une requête est envoyée à l'URL spécifiée, et le résultat est converti en JSON. Si la requête est réussie, les données
 sont mises à jour dans le state data. Si une erreur se produit lors de la requête, un message d'erreur est affiché 
 dans la console.
Le hook retourne les données récupérées, qui peuvent être utilisées dans le composant appelant. */

export function useFetchData(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error)
      }
    }

    fetchData()
  }, [url])

  return data
}