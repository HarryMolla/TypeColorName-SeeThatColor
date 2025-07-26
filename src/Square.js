import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
       // border: "1px solid #333",
        //fontSize: "2rem"
      }}
      >
      <p>{colorValue ? colorValue:"Empty Value"}</p>
      <p>{hexValue ? hexValue:"No hex value"}</p>
    </section>
  )
}

Square.defaultProps = {
  colorValue: "Empty color Value"
}

export default Square
