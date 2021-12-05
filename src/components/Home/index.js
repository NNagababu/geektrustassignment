

// write home component in reactjs code
// Write your code here
 
import {Component} from 'react'

import { BsSearch } from "react-icons/bs";

import PaginatedItems from '../PaginatedItems'

import Item from '../Item'

import './index.css'

// import PaginatedItems from '../Pagination'

class Home extends Component {
  state = {count:0,data: [],loading:true,searchtile:'',deleteList:[]}

  componentDidMount() {
    this.getElement()
  }

  getElement = async () => {
    const response = await fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
    )
    const deleteList = await response.json()
    console.log(deleteList)
    const updateData = deleteList.map(each => ({
      id: each.id,
      name: each.name,
      role: each.role,
      email: each.email,
    }))
    console.log(updateData)
    this.setState({deleteList: updateData})
    this.loadingChange()
  }

  loadingChange=()=>{
    this.setState({loading:false})
  }

  onChangeSearchInput = event => {
    event.preventDefault()
    this.setState({searchtile:event.target.value})
    }

    deleteData = deleId => {
      const {deleteList} = this.state
  
      this.setState({
        deleteList: deleteList.filter(each => each.id !== deleId),
      })
    }
    

    pageChanges=(id)=>{
       console.log(id)
       this.setState(prevState=>({count:prevState.count+4}))
    }


  render() {
    const {loading,count,searchtile,deleteList} = this.state

    return (
      <div className="AdminUi-container">
        <div className='search-container'>
          <input
            type="search"
            className="input-search"
            onChange={this.onChangeSearchInput}
            placeholder="Search by name,email or role"
          />
          <BsSearch/>
          </div>
          <div className="heading-container">  
            <ul className="list-heading-container">
              <li className='head-names'>CheckBox</li>
              <li className="head-names">Name</li>
              <li className="head-names">Email</li>
              <li className="head-names">Role</li>
              <li className="head-names">Edit</li>
              <li className="head-names">Delete</li>
            </ul>
          </div>
          <hr />
          <div className='inner-container'>
          <div>
            {loading?<h1 className='loading-content'>loading...</h1>:(deleteList.filter(value =>{
              
              if(searchtile===''){
                return value
              }

              else if (value.name.toLowerCase().includes(searchtile.toLowerCase()))
              {
                return value
              }
            })


          ).map(each => (<Item key={each.id} adminUiDetails={each} deleteData={this.deleteData}/>))}
          </div>
        </div>
        <div className='pagination-container'>
          {loading?<h1 className='loading-content'>loading...</h1>:(<PaginatedItems itemsPerPage={4} onPageChange={this.pageChanges} pageCount={deleteList.id} />)}
        </div>
        
      </div>
    )
  }
}

export default Home