import React, { useState } from 'react'
import people from '../data/data'
import usePagination from '../hooks/usePagination'

const CustomTable = ({columns, data}) => {
    const [pagination, setPagination] = useState(10)
    const [page, setPage] = useState({
        number: 1,
        total: people.length
    })
    const count = Math.ceil(page.total / pagination)
    const _DATA = usePagination(data, pagination)

    const handlePagination = (e) => {
        console.log(e.target.value, "page")
        _DATA.jump(page.number)
        setPagination(e.target.value)
    }

    const handlePage = (e, p) => {
        console.log(p, "P")
        setPage(state => ({...state, number: p}))
        _DATA.jump(p)
    }

    return (
        <div className='p-2'>
            <table className='w-full caption-bottom text-sm'>
                <thead className='[&_tr]:border-b'>
                    <tr>
                        {columns.map((col) => (
                            <th className='border p-2' key={col}>
                                {col}
                            </th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody className='[&_tr:last-child]:border-0'>
                    {
                        _DATA.currentData().map((row) => (
                            <tr key={row.id}>
                                { columns.map((col) => (
                                    <td className='border p-1' key={col}>{ row[col] }</td>
                                ))

                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            {/* pagination */}
            <div className='my-2 flex items-center justify-between'>
                <div className='text-sm'>
                    <p>{page.number}-{count} of {page.total} items</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <button disabled={page.number === 1} className='border-slate-400 border rounded-md' onClick={(e) =>handlePage(e, page.number - 1)}>prev</button>
                    <p>{page.number}</p>
                    <button disabled={page.number === _DATA.maxPage} className='border-slate-400 border rounded-md' onClick={(e) => handlePage(e, page.number + 1)}>next</button>
                    <select
                    value={pagination}
                    onChange={handlePagination}
                    className='border-slate-400 border rounded-md p-1' 
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CustomTable