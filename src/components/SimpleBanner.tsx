import React from 'react'

type Props = {}

const SimpleBanner = (props: Props) => {
  return (
    <div className='bg-[#f5f5f5] pt-10'>  
        <div className="grids relative">
            <img src="https://cf.shopee.vn/file/9c3f284715568478cc26a8440e4e4c88" alt="" />
            <div className="flex absolute top-0 left-0 w-full h-full" >
                <a className='grow-[2]' href="1"></a>
                <a className='grow-[2]' href="2"></a>
                <a className='grow-[2]' href="3"></a>
            </div>
        </div>
    </div>
  )
}

export default SimpleBanner