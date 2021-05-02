import React, { useEffect } from 'react'

const Map = ({ onStateClick }) => {
  useEffect(() => {
    document.simplemaps_countrymap.hooks.click_state = function (id) {
      onStateClick && onStateClick(id)
    }
    document.simplemaps_countrymap.hooks.zoomable_click_state = function (id) {
      onStateClick && onStateClick(id)
    }
  }, [onStateClick])

  return (
    <>
      <div id="map" style={{marginTop: 50}}></div>
    </>
  )
}

export default Map