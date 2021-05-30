import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import React,{useState} from 'react';
import Detail from './Detail';

//Location Pin placed on map based on latitude and longitude, sequence number displayed next to it

const Pin = ({ text, info }) => {
    
    const [visible,setVisible] = useState(false); //decides visibility of card
      return (
    <div className="pin">
      <Icon 
      icon={locationIcon} style={{color:"tomato"}} 
      onClick={()=>{setVisible(!visible)} }
      className="pin-icon" />
      <p className={`${text? 'pin-text' : 'pin-miss'}`} 
      style={{color:"papayawhip"}}>
        <b>{(text)? text:'miss'}</b>
        </p>
      {visible?
      <Detail info={info} setVisible={setVisible} />: //to display task details in card on click
      null}
    </div>
  )
      }

  export default Pin;
