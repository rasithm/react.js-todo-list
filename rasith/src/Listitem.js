import React from 'react'
import { FaTrashAlt, FaUnderline } from "react-icons/fa";
const Listitem = ({item,keycheck,delet}) => {
  return (
    <li className="item"   onDoubleClick={() => keycheck(item.id)}>
                        <input type='checkbox' 
                        onChange={() => keycheck(item.id)}
                        checked={item.checked} />
                            <label
                             style={(item.checked)?{textDecoration:"line-through"}:null}
                            onDoubleClick={() => keycheck(item.id)}>{item.item}</label>
                            <FaTrashAlt 
                            role="button"
                            tabIndex='0'
                            aria-label={`delete ${item.item}`}
                            onClick={() => delet(item.id)}/>
                    </li>
  )
}

export default Listitem