import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/map.css';
import Pin from "./Pin";

function createMapOptions(maps) {   //disables window info for POI
  return {
    clickableIcons: false
  }
}

const Map = ({ data, seqno}) => {
   
     const one= data.filter(          //for default center
        item => {return(item.seq === seqno)
     })

    
    return (
    <div className="google-map">
       <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={{lat: seqno?one[0].location.lat:28.7041,
                 lng: seqno?one[0].location.lon:77.1025 }}  //default provided in case data is empty
        zoom={19}
        options={createMapOptions} >
          
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