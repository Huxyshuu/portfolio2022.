import React, { useEffect, useState } from 'react'
import '../Styles/MiniSettings.css'

export default function MiniSettings(props) {

  const [isSmall, setIsSmall] = useState();

  useEffect(() => {
    const checkWindowSize = () => {
        setIsSmall(window.innerWidth < 1300 ? true : false);
    }

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    }
  })

  if (!isSmall) {
    return (
      <div id="mini-container">
          <p onClick={() => props.setLanguage('EN')}>EN</p>
          <p onClick={() => props.setLanguage('FI')}>FI</p>
          <p onClick={() => props.setLanguage('JP')}>JP</p>
      </div>
    )
  }
}
