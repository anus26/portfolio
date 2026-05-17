import React from 'react'

const NavabarLogo = () => {
  return (
    <div className="flex items-center">

      {/* Desktop Logo */}
      <h1
        className="
        hidden sm:block
        text-white
        font-bold
        text-xl md:text-2xl
        whitespace-nowrap
      "
      >
        Anus Raza
      </h1>

      {/* Mobile Logo */}
      <h1
        className="
        block sm:hidden
        text-white
        font-special
        font-extrabold
        text-2xl
      "
      >
        AR
      </h1>

    </div>
  )
}

export default NavabarLogo