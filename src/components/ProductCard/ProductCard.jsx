import React from 'react'
import { Button } from '../Button'

const ProductCard = ({
  title,
  subtitle,
  normalPrice,
  price,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 text-black rounded shadow lg:px-10 mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20">
        {/* Kiri */}
        <div className="text-center lg:text-left flex-1 my-5">
          <h3 className="text-2xl font-bold font-poppins mb-4">{title}</h3>
          <p className="text-base max-w-sm font-inter mb-5">{subtitle}</p>
          {price && <p className="text-md text-red-600 line-through font-semibold">{normalPrice}</p>}
          {price && <p className="text-xl font-bold mb-4">{price}</p>}
          <Button
            children={buttonText}
            width={"200px"}
            height={"35px"}
            onClick={onButtonClick}
          />
        </div>

        {/* Kanan */}
        <div
          className="hidden lg:block border-white border-2 shadow-sm shadow-white my-5 max-w-[320px] w-full h-[250px] relative"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProductCard