

// write Pagination component 


import {useEffect, useState} from 'react'

import ReactPaginate from 'react-paginate'

import './index.css'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function Items({currentItems}) {
  return (
    <>
      {currentItems &&
        currentItems.map(item => (
          <div>
            <h1 className='head' >{item}</h1>
          </div>
        ))}
    </>
  )
}

const PaginatedItems = ({itemsPerPage}) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)

    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
  }

  return (
    <div className='container'>
    <div className='heading' >
      <Items currentItems={currentItems}  />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}

        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        
      />
      </div>
    
    </div>
  )
}

export default PaginatedItems