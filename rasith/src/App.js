import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import Additem from "./Additem";
import Listitem from "./Listitem";




function App() {

  const [item,setItem] = useState([
    {id:1,
        checked: true,
        item:"practice coding"
    },
    {id:2,
        checked: false,
        item:"play cricket"
    },
    {id:3,
        checked: false,
        item:"read about AI"
    }
    
 ])
 const [NewItem , setNewItem] = useState('')
 const addItem = (item) => {
    const id = item.length ? item[item.length -1] . id + 1 : 1 ; 
    const addNewItem = {id,checked:false,item}
    const listitems = {...item , addNewItem}
    setItem(listitems)
    localStorage.setItem("todo_list" , JSON.stringify(listitems))
 }




    const keycheck = (id) => {
        const listitems = item.map((item) => 
            item.id===id ? {...item ,checked:!item.checked} : item
        )
        setItem(listitems)
        localStorage.setItem("todo_list" , JSON.stringify(listitems))

    }
    const delet = (id) => {
        const listitems = item.filter((item) => 
            item.id!==id  
        )
        setItem(listitems)
        localStorage.setItem("todo_list" , JSON.stringify(listitems))
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(!NewItem) return;
        console.log(NewItem)
        setNewItem('')
        addItem(NewItem)
    }
  return (
  <div className="App">
    <Header title={"To Do List"}/>
    <Additem
        NewItem={NewItem}
        setNewItem={setNewItem}
        handlesubmit={handlesubmit}
    />

    <Content
        item = {item}
        keycheck = {keycheck}
        delet = {delet}
    />
    <Footer
    Length={item.length}
    />
    
    </div>  
  
 );
}

export default App;
