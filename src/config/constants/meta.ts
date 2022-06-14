import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HopiumSwap',
  description:
    'The newest AMM on Polygon network! Earn HOPE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HopiumSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pbs.twimg.com/profile_banners/1515427411931762691/1650296460/600x200',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/hopium-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HopiumSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('HopiumSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('HopiumSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('HopiumSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('HopiumSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('HopiumSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HopiumSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HopiumSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('HopiumSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HopiumSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('HopiumSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HopiumSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HopiumSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HopiumSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HopiumSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('HopiumSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('HopiumSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('HopiumSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('HopiumSwap Info & Analytics')}`,
        description: 'View statistics for HopiumSWap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('HopiumSwap Info & Analytics')}`,
        description: 'View statistics for HopiumSWap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('HopiumSwap Info & Analytics')}`,
        description: 'View statistics for HopiumSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('HopiumSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('HopiumSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('HopiumSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('HopiumSwap')}`,
      }
    case '/hopium-squad':
      return {
        title: `${t('Hopium Squad')} | ${t('HopiumSwap')}`,
      }
    default:
      return null
  }
}
