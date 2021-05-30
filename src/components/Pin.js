import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import React,{useState} from 'react';
import Detail from './Detail';

const Pin = ({ text, info }) => {
    
    const [visible,setVisible] = useState(false);
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
      <Detail info={info} setVisible={setVisible} />:
      null}
    </div>
  )
      }

  export default Pin;
