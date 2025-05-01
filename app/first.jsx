"use client"
import people from './data/data'
import ReusableModal from './components/ReusableModal'
import React, { useState, useMemo } from 'react'
import CustomTable from './components/CustomTable'

const First = () => {
    const [count, setCount] = useState(1)
    const [activeTab, setActiveTab] = useState("min")
    const [isOpen, setIsOpen] = useState(false)

    const minAgePerson = useMemo(() => {
        return people.reduce((youngest, person) =>
          person.age < youngest.age ? person : youngest
        )
      }, [])

    //   FUNCTION QURSTION 2
    
      // Find person with maximum age
      const maxAgePerson = useMemo(() => {
        return people.reduce((oldest, person) =>
          person.age > oldest.age ? person : oldest
        )
      }, [])
    
      // Sort by ascending age 
      const sortedByMinAge = useMemo(() => {
        return [...people].sort((a, b) => a.age - b.age);
      }, [])
    
      // Sort by descending age
      const sortedByMaxAge = useMemo(() => {
        return [...people].sort((a, b) => b.age - a.age);
      }, [])

      const renderList = (list) => (
        <ul className="list-disc list-inside mt-4">
          {list.map((person) => (
            <li key={person.id}>{person.name} — {person.age}</li>
          ))}
        </ul>
      )

  return (
    <div>
        {/* Question 1 */}
        <button className='p-2 w-[200px] border-1 rounded-md mb-5' onClick={() => setCount(count+1)}>Count: {count}</button>

        {/* Question 2 and 3 */}
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Age Stats</h2>
            <p>Youngest: {minAgePerson.name} ({minAgePerson.age})</p>
            <p>Oldest: {maxAgePerson.name} ({maxAgePerson.age})</p>

            <div className="p-4 max-w-md mx-auto">
                <div className="flex border-b">
                    <button
                    className={`py-2 px-4 font-semibold ${activeTab === 'min' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('min')}
                    >
                    Sorted by Min Age
                    </button>
                    <button
                    className={`py-2 px-4 font-semibold ${activeTab === 'max' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('max')}
                    >
                    Sorted by Max Age
                    </button>
                </div>
                {activeTab === 'min' && renderList(sortedByMinAge)}
                {activeTab === 'max' && renderList(sortedByMaxAge)}
            </div>
        </div>

        {/* Question 4 & 5 */}
        <button onClick={() => setIsOpen(true)} className='p-2 w-[200px] border-1 rounded-md mb-5'>Open Modal Table</button>
        <ReusableModal onClose={() => setIsOpen(false)} isOpen={isOpen} title={"Test"}>
            <CustomTable columns={["id", "name", "age", "occupation"]} data={people} />
        </ReusableModal>
    </div>
  )
}

export default First