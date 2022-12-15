import React from 'react'

const Categories = () => {
    
    const data = [{
        cateImg: "../../images/macbook.jpg",
        cateName:"Mac book"
    },
    {
        cateImg: "../../images/apple.webp",
        cateName:"Apple"
    },
    {
        cateImg: "../../images/hplaptop.jpg",
        cateName:"HP"
    },
    
    {
        cateImg: "../../images/macbookiphone.jpg",
        cateName:"iPhone"
    },
    {
        cateImg: "../../images/macpro.jpg",
        cateName:"Mac pro"
    },
    {
        cateImg: "../../images/motorola.webp",
        cateName:"Motorola"
    },
    {
        cateImg: "../../images/nokia.jpg",
        cateName:"Nokia"
    },
    {
        cateImg: "../../images/pentab.jpg",
        cateName:"Pen Tab"
    },
    {
        cateImg: "../../images/samsung.jpg",
        cateName:"Samsung"
    },
]
  return (
    <div className='category'>
        {data.map((value, index)=> { return(
            <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
            </div>
        )})}
    </div>
  )
}

export default Categories