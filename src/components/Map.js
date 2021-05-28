import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/map.css';
import Pin from "./Pin";

const Map = ({ data, seqno}) => {
   
    const one= data.filter(
        item => {return(item.seq === seqno)
     })

    return (
    <div className="google-map">
       <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={{lat: one[0].location.lat,
                        lng: one[0].location.lon }}
        defaultZoom={19}
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