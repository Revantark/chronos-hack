import React,{useEffect,useState} from 'react'
import './home.css' 


export default function FarmerHome() {
    const [stockName,setstockName] = useState("");
    const [stockPrice,setStockPrice] = useState("");
    const [stockQuantity,setStockQuantity] = useState("");
    const [currentPage, setPage] = useState(0);
    const [sales, setsales] = useState([
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg'
        },       
    ]);

    const [transaction, setTransactions] = useState([
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg',
            vendorName:'Suresh'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg',
            vendorName:'Suresh'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg',
            vendorName:'Suresh'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg',
            vendorName:'Suresh'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg',
            vendorName:'Suresh'
        },
        {
            stockName:'Wheat',
            stockPrice:'$1000',
            stockQuantity:'10kg',
            vendorName:'Suresh'
        },
               
    ]);

       
   function updateStock(){
        setsales((sales)=>{
            let s=sales;
            s.push({
                stockName:stockName,
                stockPrice:stockPrice,
                stockQuantity:stockQuantity
            })
            setstockName("");
            setStockPrice("");
            setStockQuantity("");

            return s;
        })
    }

    useEffect(() => {
        
    }, []);
    return (
        <div>
            <nav className="navBar">
                <div>               
                    <h2>FarmerHome</h2>
                </div>

                <div>
                    <a onClick={()=>setPage(0)} className="anchors">Post Stock</a>
                    <a onClick={()=>setPage(2)} className="anchors">View Stocks</a>
                    <a onClick={()=>setPage(3)} className="anchors">Transactions</a>

                </div>

            </nav>
            
            {
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
                </div>
            }

                                                                                           
            
        </div>
    )
}
