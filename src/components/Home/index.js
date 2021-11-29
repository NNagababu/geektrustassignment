

// write home component in reactjs code
// Write your code here
 
import {Component} from 'react'

import { BsSearch } from "react-icons/bs";

import Pagination from '../Pagination'

import Item from '../Item'

import './index.css'

// import PaginatedItems from '../Pagination'

class Home extends Component {
  state = {data: [],loading:true,searchtile:''}

  componentDidMount() {
    this.getElement()
  }

  getElement = async () => {
    const response = await fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
    )
    const data = await response.json()
    console.log(data)
    const updateData = data.map(each => ({
      id: each.id,
      name: each.name,
      role: each.role,
      email: each.email,
    }))
    console.log(updateData)
    this.setState({data: updateData})
    this.loadingChange()
  }

  loadingChange=()=>{
    this.setState({loading:false})
  }

  onChangeSearchInput = event => {
    event.preventDefault()
    this.setState({searchtile:event.target.value})
    }



  render() {
    const {data,loading,searchtile} = this.state

    return (
      <div className="AdminUi-container">
        <div>
          <input
            type="search"
            className="input-search"
            onChange={this.onChangeSearchInput}
            placeholder="Search by name,email or role"
          />
          <BsSearch/>
          <div className="heading-container">  
            <td className="list-heading-container">
              <tr className='heading'>CheckBox</tr>
              <tr className="heading">Name</tr>
              <tr className="heading">Email</tr>
              <tr className="heading">Role</tr>
              <tr className="heading">Actions</tr>
            </td>
          </div>
          <hr />
          <div className='cont'>
          <div>
            {loading?<h1 className='cont3'>loading...</h1>:(data.filter(value =>{
              
              if(searchtile===''){
                return value
              }

              else if (value.name.toLowerCase().includes(searchtile.toLowerCase()))
              {
                return value
              }
            })


          ).map(each => (<Item key={each.id} adminUiDetails={each} />))}
          </div>
        </div>
        <div className='cont1'>
          {loading?<h1 className='cont3'>loading...</h1>:(<Pagination itemsPerPage={4} />)}
        </div>
        </div>
      </div>
    )
  }
}

export default Home