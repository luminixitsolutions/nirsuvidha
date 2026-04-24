'use client'
import React from 'react'
import GoogleMapReact from 'google-map-react';

 const defaultProps = {
    center: {
      lat: 40.7,
      lng: -73.87
    },
    zoom: 9
  };

export default function HomeMap() {
  return (
    <div className="home-map-container fw-map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        />
    </div>
  )
}
