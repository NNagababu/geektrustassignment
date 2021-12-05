
// write your Item component

// import {MdDelete} from 'react-icons/md'
// import {FiEdit} from 'react-icons/fi'

import { BsFillTrashFill } from "react-icons/bs";
import { BsBoxArrowInDownRight } from "react-icons/bs";

import './index.css'

const Item = props => {
  const {adminUiDetails} = props
  const {name, email, role, id} = adminUiDetails

  const deleteItem=()=>{
    const{deleteData}=props
       deleteData(id)
      console.log(id)
  }

 const changeData=()=>
   {
     <input type="text"/>
     console.log("exit")
   }

 

  const changeValue=()=>{
    changeData()
    const{email,name}=adminUiDetails
    console.log(`change${id} ${email} ${name}`)
  }


  const valueDelet=()=>(
    console.log(id)
  )

  return (
    <div className='container'>
    <li key={id} className="heading-container">

      <div> <input type="checkbox" className='heading' onClick={valueDelet}/></div>
      <div><h1 className="heading">{name}</h1></div>
      <div><h1 className="heading">{email}</h1></div>
      <div><h1 className="heading">{role}</h1></div>
      <div>  <h1 className="heading"><BsBoxArrowInDownRight className="heading" onClick={changeValue}/></h1> </div>
      <div><h1 className="heading"> <BsFillTrashFill className="heading" onClick={deleteItem} /></h1> </div>
      
     
      
      
      
    
      
    </li>
    </div>
  )
}



export default Item 