import React,{useState} from 'react'
import './home.css' 
import logo from '../../assets/logo.png'


export default function FarmerHome() {
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [quantity,setQuantity] = useState("");
    const [price,setPrice] = useState("");
    const [stocks,setStocks] = useState([])
    return (
        <div>
            <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <img src={logo} alt="" />
            <span>Farmhouse</span>
        </div>    
        <div  className='nav-links'>
      
            <a  href="/shop" >Shop</a>
            <a  href="/advice" >Expert Advice</a>
            <a  href="/home" >Logout</a>

        </div>
        
        </div>
        <div style={{
            margin:'2rem',
            display:'grid',
            gap:'1rem',
            flexDirection:'column',
            placeContent:'center'
        }} >
            <div className='inputs' >
            <input 
            id='in'
            style={{
                width:'200px'
            }}  type="text" onChange={(e)=>{
                setName(e.target.value)
            }}  placeholder="Product" />
            
            <input
            id='in1'
            onChange={(e)=>{
                setType(e.target.value)
            }} style={{
                width:'200px'
            }} type="text" placeholder="Type" />
            <input 
            id='in2'
            onChange={(e)=>{
                setQuantity(e.target.value)
            }}
            style={{
                width:'200px'
            }} type="text" placeholder="Quantity" />
            <input
            id='in3'
             onChange={(e)=>{
                setPrice(e.target.value)
            }}
            style={{
                width:'200px'
            }} type="text" placeholder="Price" />
            </div>
            
            <button onClick={()=>{
                setStocks((e)=>{
                    return [...e,{
                        name:name,
                        type:type,
                        quantity:quantity,
                        price:price
                    }]
                })
                const s = document.getElementById('in')
                s.value=""
                const s1 = document.getElementById('in1')
                s1.value=""
                const s2 = document.getElementById('in2')
                s2.value=""
                const s3 = document.getElementById('in3')
                s3.value=""
            }} className='butt' >Add Post</button>
        </div>
        <div className="transki" style={{
            display:'flex',
            placeContent:'center',
            
        }} >
        
        <div className='trans'>
        <p style={{
            fontSize:'1.5rem',
            marginTop:'0rem',
            fontWeight:'bold'
        }} >Current Stock</p>
            <div className="row">
                <span>1</span>
                <span>Grains</span>
                <span>Rice</span>
                <span>1000kgs</span>
                <span>Rs. 1000</span>
            </div>
            <div className="row">
                <span>2</span>
                <span>Grains</span>
                <span>Wheat</span>
                <span>1000kgs</span>
                <span>Rs. 2000</span>
            </div>
            <div className="row">
                <span>3</span>
                <span>Vegies</span>
                <span>Potatoes</span>
                <span>100kgs</span>
                <span>Rs. 1000</span>
            </div>
            {
                stocks.map((s,index)=>{
                        return (
                            <div className="row">
                <span>{index+3}</span>
                <span>{s.type}</span>
                <span>{s.name}</span>
                <span>{s.quantity}</span>
                <span>Rs. {s.price}</span>
            </div>
                        )
                    })
            }
        </div>
        </div>
        <div style={{
            height:'16px'
        }} ></div>
        <div className="transki" style={{
            display:'flex',
            placeContent:'center',
            
        }} >
        
        <div className='trans'>
        <p style={{
            fontSize:'1.5rem',
            marginTop:'0rem',
            fontWeight:'bold'
        }} >Last Transactions</p>
            <div className="row">
                <span>1</span>
                <span>Grains</span>
                <span>Rice</span>
                <span>1000kgs</span>
                <span>Rs. 1000</span>
            </div>
            <div className="row">
                <span>2</span>
                <span>Grains</span>
                <span>Wheat</span>
                <span>1000kgs</span>
                <span>Rs. 2000</span>
            </div>
            <div className="row">
                <span>3</span>
                <span>Vegies</span>
                <span>Potatoes</span>
                <span>100kgs</span>
                <span>Rs. 1000</span>
            </div>
            <div className="row">
                <span>4</span>
                <span>Fruits</span>
                <span>Oranges</span>
                <span>100kgs</span>
                <span>Rs. 2000  </span>
            </div>
            <div className="row">
                <span>5</span>
                <span>Grains</span>
                <span>Rice</span>
                <span>1000kgs</span>
                <span>Rs. 1000</span>
            </div>
        </div>
        </div>
            
            {/* {
                currentPage===0 &&
                <div id="addStock">
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

                        <button type="button" class="btn" onClick={()=>updateStock()}>Post Stock</button>                        
                    </div>

                </div>
            }

            {
                currentPage===2 &&
                <div className="page">
                <table id="customers" >
                    <tr>
                        <th>Stock Name</th>
                        <th>Stock Price</th>
                        <th>Stock Quantity</th>
                    </tr>
                    {
                        sales.map((sale)=>{
                            return <tr>
                                    <td>{sale.stockName}</td>
                                    <td>{sale.stockPrice}</td>
                                    <td>{sale.stockQuantity}</td>
                                   </tr>
                        })
                    }                    
                </table>
                </div>
            }

            {
                currentPage===3 &&
                <div className="page">
                <table id="customers" >
                    <tr>
                        <th>S.No</th>
                        <th>Stock Name</th>
                        <th>Stock Price</th>
                        <th>Stock Quantity</th>
                        <th>Vendor Name</th>
                    </tr>
                    {
                        transaction.map((sale,index)=>{
                            return <tr>
                                    <td>{index+1}</td>
                                    <td>{sale.stockName}</td>
                                    <td>{sale.stockPrice}</td>
                                    <td>{sale.stockQuantity}</td>
                                    <td>{sale.vendorName}</td>
                                   </tr>
                        })
                    }                    
                </table>
                </div> */}
            {/* } */}

                                                                                           
            
        </div>
    )
}
