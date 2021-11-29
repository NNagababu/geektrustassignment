
// write your Item component

import {MdDelete} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'

import './index.css'

const Item = props => {
  const {adminUiDetails} = props
  const {name, email, role, id} = adminUiDetails

  return (
    <div className='container'>
    <td key={id} className="heading-container">
      <input type="checkbox" className='heading' />
      <tr className="heading">{name}</tr>
      <tr className="heading">{email}</tr>
      <tr className="heading">{role}</tr>
       <tr className='heading'><FiEdit  /></tr> 
        <tr className='heading'><MdDelete /></tr>
    </td>
    </div>
  )
}



export default Item 