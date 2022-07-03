import React from 'react'
import BannerHotword from '../components/BannerHotword'
import Categories from '../components/Categories'
import FlashSale from '../components/FlashSale'
import HomePageMall from '../components/HomePageMall'
import RecomentProducts from '../components/RecomentProducts'
import SimpleBanner from '../components/SimpleBanner'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <BannerHotword />
        <Categories />
        <FlashSale />
        <SimpleBanner />
        {/* <HomePageMall /> */}
        <RecomentProducts />
    </div>
  )
}

export default HomePage