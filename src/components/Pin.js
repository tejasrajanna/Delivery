import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import React from 'react';
//import Detail from './Detail';

const Pin = ({ text, info }) => (
    <div className="pin">
      <Icon icon={locationIcon} style={{color:"tomato"}} className="pin-icon" />
      <p className="pin-text" style={{color:"papayawhip"}}><b>{text}</b></p>
    </div>
  )

  export default Pin;
