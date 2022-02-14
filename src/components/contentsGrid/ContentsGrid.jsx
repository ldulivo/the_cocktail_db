import React from 'react'

const ContentsGrid = ({ children, stylesGrid }) => {
  return (
    <div className={`contentsGrid ${stylesGrid}`}>
        {children}
    </div>
  )
}

export default ContentsGrid