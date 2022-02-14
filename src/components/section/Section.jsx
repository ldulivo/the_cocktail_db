import React from 'react'

const Section = ({ children, styles }) => {
  return (
    <section className={`section_${styles}`}>
        {children}
    </section>
  )
}

export default Section