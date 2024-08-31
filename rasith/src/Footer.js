import React from 'react'

const Footer = ({Length}) => {
    
  return (
    <footer>{Length} Check {Length !== 1 || 0  ? "Boxs" : "Box"}</footer>
  )
}

export default Footer