import React, { useState } from 'react'

const usePagination = (data, itemsPerPage) => {
    // console.log(data)
    const [currentPage, setCurrentPage] = useState(1)
    const maxPage = Math.ceil(data.length / itemsPerPage)

    const currentData = () => {
        // console.log(currentPage)
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        return data.slice(begin, end)
      }
    
      const jump = (page) => {
        // console.log(page)
        const pageNumber = Math.max(1, page)
        setCurrentPage(Math.min(pageNumber, maxPage))
      }
    
      return { 
        jump, 
        currentData, 
        currentPage, 
        maxPage 
    };
}

export default usePagination