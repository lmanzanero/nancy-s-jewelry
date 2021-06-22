import { useState, useEffect } from 'react'

export default function useSearchOrder(referenceNumber) {
  const [loading, setLoading] = useState(false);
  const [isValidRefNum, setIsValidRefNum ] = useState(false);
  const [data, setData ] = useState(null);
  const [error, setError] = useState('')

  useEffect(() => {
    if(!referenceNumber) return  
  }, [referenceNumber])

  async function searchWithReferenceNumber() {  
    try {
    setLoading(true);
       //send referenceNumber values to api
    const results = await fetch(`https://us-central1-nancy-s-jewerly.cloudfunctions.net/api/order/52C80S4U`)
    const data = await results.json();  
      console.log(data);
      setLoading(false);
      setData(data);
      setIsValidRefNum(true); 
    } catch (error) {
      setError(error)
    }
  }

  return { loading, isValidRefNum, data, searchWithReferenceNumber }
}