import { useContext } from 'react'
import { FarmsPageLayout, FarmsContext } from 'views/Farms'
import FarmCard from 'views/Farms/components/FarmCard/FarmCard'
import { getDisplayApr } from 'views/Farms/Farms'
import { usePriceHopeBusd } from 'state/farms/hooks'
import { useWeb3React } from '@web3-react/core'

const FarmsHistoryPage = () => {
  const { account } = useWeb3React()
  const { chosenFarmsMemoized } = useContext(FarmsContext)
  const hopePrice = usePriceHopeBusd()

  return (
    <>
      {chosenFarmsMemoized.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
          hopePrice={hopePrice}
          account={account}
          removed
        />
      ))}
    </>
  )
}

FarmsHistoryPage.Layout = FarmsPageLayout

export default FarmsHistoryPage
