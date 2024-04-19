import React from "react"
import Banner from '../../components/banner/banner.jsx'
import AproposImage from '../../assets/images/A_propos_image.jpg'
import Collapses from "../../data/collapses.json"
import Collapse from '../../components/collapse/collapse.jsx'
import '../../style.css'

function Apropos() {
    return (
        <>
        <Banner image={AproposImage} altText="Banner" text=""/> 
        <div className="aproposDescription">
          <div className="aproposDropdown">
            {Collapses.map((item) => {
                return <Collapse key={item.id} content={item.content} title={item.title} />
                })}
          </div>
        </div>       
    </>
    )
  }
  
  export default Apropos