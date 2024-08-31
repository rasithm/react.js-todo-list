import React from 'react'


import Itemslist from './Itemlist';

const Content = ({item,keycheck,delet}) => {



  return (
        <main>
            {(item.length) ? (
                <Itemslist
                item={item}
                keycheck={keycheck}
                delet={delet}
                />
            ) : (
            <p style={{fontSize:"2rem"}}>you list is empty</p> 
        )}
        </main>
    
  )
}

export default Content