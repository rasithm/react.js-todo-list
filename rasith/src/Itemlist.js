import React from 'react'

import Listitem from './Listitem';

const Itemslist = ({item,keycheck,delet}) => {
  return (
            <ul>
                {item.map((item) =>(
                    <Listitem
                    item = {item}
                    key ={item.id}
                    keycheck = {keycheck}
                    delet = {delet}  
                    />
                ))}
            </ul>
            )
  
}

export default Itemslist