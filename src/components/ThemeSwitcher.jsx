import React, { useState } from "react"

import { WbSunny, Settings,ModeNight} from '@mui/icons-material';

const ThemeSwitcher = () => {
  const [mode, setMode] = useState("dark");
  const [isOpenThemeColor, setIsOpenThemeColor] = useState(false);
  const [activeStyle, setActiveStyle] = useState('color-1');
  
  return (
<>
    <div className='style-switcher'>
 <div data-aos='fade-down-right'  className='s-icon style-switcher-toggler' onClick={()=> setIsOpenThemeColor(!isOpenThemeColor)}><Settings/></div> 
<div className='s-icon mode-icon' onClick={()=> setMode('light')}> {mode==='dark' ? <WbSunny /> :<ModeNight />}  </div>  
<div data-aos='fade-down-right' className='colors'>
  {isOpenThemeColor && <div className="theme-color-container">
<h4>Theme Colors</h4> 
<span className='color-1 active' onClick={()=>setActiveStyle(activeStyle)}></span> 
<span className='color-2' onClick={()=>setActiveStyle('color-2')}></span> 
<span className='color-3' onClick={()=>setActiveStyle('color-3')}></span> 
<span className='color-4' onClick={()=>setActiveStyle('color-4')}></span> 
<span className='color-5' onClick={()=>setActiveStyle('color-5')}></span> 
<span className='color-6' onClick={()=>setActiveStyle('color-6')}></span> 
</div>
} 
</div> 
</div>
</>
    )
}
export default ThemeSwitcher
