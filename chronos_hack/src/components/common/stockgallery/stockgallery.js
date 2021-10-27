import React,{useState} from 'react'

function StockGallery() {
    const [data, setdata] = useState([
        1,2,3,4,5,6,7
    ]);
    return (
        <div class="container">
            {
                data.map((item)=>{
                    return <div className="item">{item}</div>
                })
            }
        </div>
    )
}

export default StockGallery;
