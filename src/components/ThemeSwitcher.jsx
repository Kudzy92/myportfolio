import React from "react"
//import React, { useState } from "react"
//ModeNight,
import { WbSunny, Settings} from '@mui/icons-material';

export const ThemeSwitcher = () => {
  //const [mode, setMode] = useState("dark")
  const setActiveStyle = ()=>{

  }
  return (
<>
    <div className='style-switcher'>
 <div data-aos='fade-down-right'  className='style-switcher-toggler s-icon'><i>{Settings}</i></div> 
<div className='mode-icon' onclick=""> <i> {WbSunny}</i>  </div>  
<div data-aos='fade-down-right' className='colors'> 
<h4>Theme Colors</h4> 
<span className='color-1 active' onclick={setActiveStyle('color-1')}></span> 
<span className='color-2' onclick={setActiveStyle('color-2')}></span> 
<span className='color-3' onclick={setActiveStyle('color-3')}></span> 
<span className='color-4' onclick={setActiveStyle('color-4')}></span> 
<span className='color-5' onclick={setActiveStyle('color-5')}></span> 
<span className='color-6' onclick={setActiveStyle('color-6')}></span> 
</div> 
</div>
</>
    )
}

