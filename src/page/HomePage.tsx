import React from 'react'
import BannerHotword from '../components/BannerHotword'
import Categories from '../components/Categories'
import FlashSale from '../components/FlashSale'
import Header from '../components/Header'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <Header />
        <BannerHotword />
        <Categories />
        <FlashSale />
    </div>
  )
}

export default HomePage