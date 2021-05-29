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
        center={{lat: seqno?one[0].location.lat:28.7041,
                 lng: seqno?one[0].location.lon:77.1025 }}  //default provided in case data is empty
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