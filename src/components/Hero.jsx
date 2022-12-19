import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div key={i} className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='btn-1' data-aos='fade-up-right'>
              Download CV
            </button>
          </div>
        ))}
        		  			
<div className='effect-wrap'>
<div className='effect effect-1'></div>

<div className='effect effect-2'>

<div></div><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div>
</div>

<div className='effect effect-3'></div>
<div className='effect effect-4'></div>

<div className='effect effect-5'>

<div></div><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div><div></div>
</div>
</div>

      </section>
    </>
  )
}
export default Hero
