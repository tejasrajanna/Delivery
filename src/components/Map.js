import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/map.css';
import Pin from "./Pin";

const Map = ({ data, zoomLevel }) => {
   
    const one= data.filter(
        item => {return(item.seq === 1)
     })

    return (
    <div className="google-map">
       <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={{lat: one[0].location.lat,
                        lng: one[0].location.lon }}
        defaultZoom={zoomLevel}
      >
      {data.map((loc)=>(
       <Pin
          key={loc.taskId}
          lat={loc.location.lat}
          lng={loc.location.lon}
          text={loc.seq}
          info={loc}
        />
      )) }
      </GoogleMapReact>
    </div>
    )
}
      
export default Map;