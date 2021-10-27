import React,{useState,useEffect} from 'react'


function AddInfo() {
    const [stockName,setstockName] = useState("");
    const [stockPrice,setStockPrice] = useState("");
    const [stockQuantity,setStockQuantity] = useState("");

    useEffect(() => {
        
    }, []);
    return (
        <div className="box">
            <span class="textCenter">POST STOCK</span>
            <div class="input-container">
                <input type="text" required value={stockName} onChange={(e)=>setstockName(e.target.value)}/>
                <label>Stock Name</label>		
            </div>
            
            <div class="input-container">
                <input type="number" required value={stockQuantity} onChange={(e)=>setStockQuantity(e.target.value)}/>
                <label>Stock Quantity</label>		
            </div>

            <div class="input-container">
                <input type="number" required value={stockPrice} onChange={(e)=>setStockPrice(e.target.value)}/>
                <label>Price</label>		
            </div>

            <button type="button" class="btn" onClick={()=>{}}>Post Stock</button>                        
        </div>
    )
}

export default AddInfo
