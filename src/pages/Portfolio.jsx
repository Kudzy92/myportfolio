import React, { useState } from "react"
import { portfolio } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import { Link } from "react-router-dom"

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container'>
        <div className="section-title text-align">
                    <h5 className="sub-title">Portfolio</h5>
                    <h3 className="main-title">my latest work.</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='section-content'>
          <div className='catButton'>
            {category.map((category,i) => (
              <button key ={i} className='btn-1' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
            <div key={item.id} className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.done}</span>
                  <Link to={item.url}><span>{item.name}</span></Link>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </article>
    </>
  )
}
export default Portfolio
