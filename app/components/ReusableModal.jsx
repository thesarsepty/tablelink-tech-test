import React from 'react'

const ReusableModal = ({title, children, isOpen, onClose}) => {
  
  if(!isOpen) return null

  return (
    <div className="fixed inset-0 w-full z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg text-black/80 font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-700 cursor-pointer hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-black/80">{children}</div>
      </div>
    </div>
  )
}

export default ReusableModal