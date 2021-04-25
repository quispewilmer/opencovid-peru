import React, { useEffect } from 'react'
import Helmet from 'react-helmet';

const Map = ({ onStateClick }) => {
  useEffect(() => {
    document.simplemaps_countrymap.hooks.click_state = function (id) {
      console.log('STATE ID', id)
      onStateClick && onStateClick(id)
    }
    document.simplemaps_countrymap.hooks.zoomable_click_state = function (id) {
      console.log('STATE ID', id)
      onStateClick && onStateClick(id)
    }
  }, [])


  return (
    <>
      <div id="map" style={{marginTop: 50}}></div>
    </>
  )
}

export default Map