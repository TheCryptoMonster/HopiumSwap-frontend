import { useEffect } from 'react'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const hopePriceBusd = useCakeBusdPrice()
  useEffect(() => {
    const hopePriceBusdString = hopePriceBusd ? hopePriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${hopePriceBusdString}`
  }, [hopePriceBusd])
}
export default useGetDocumentTitlePrice
