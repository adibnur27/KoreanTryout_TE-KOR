import React from 'react'
import { Button } from '../Button'

const ProductCard = ({
  title,
  subtitle,
  price,
  DiscountPrice,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white text-black rounded shadow lg:px-10 mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        {/* Kiri */}
        <div className="text-center lg:text-left flex-1 my-5 font-opensans">
          <h3 className="text-2xl font-bold font-poppins font-montserrat">{title}</h3>
          <p className="text-base max-w-80 font-inter my-5">{subtitle}</p>
          {price && <p className="text-md text-red-600 line-through"><i>{price}</i></p>}
          <p className="text-xl font-bold mb-5">{DiscountPrice}</p>
          <Button
            children={buttonText}
            className={'bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter'}
            width={"100px"}
            height={"35px"}
            onClick={onButtonClick}
          />
        </div>

        {/* Kanan */}
        <div
          className="hidden lg:block border-white border-2 shadow-sm shadow-white my-5 max-w-[420px] w-full h-[250px] relative"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProductCard