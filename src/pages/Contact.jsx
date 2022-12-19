import React from "react"
import { contact } from "../data/dummydata"
const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
        <div className="section-title text-align">
                    <h5 className="sub-title">Contact</h5>
                    <h3 className="main-title">say hello ..</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button  className='btn-1' data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div key={item.id} className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
