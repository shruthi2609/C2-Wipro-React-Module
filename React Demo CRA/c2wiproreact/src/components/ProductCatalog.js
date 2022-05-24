import Counter from "./CounterComponent"
function ProductCatalog(props){
    const {data}=props
    return(
        <div>
           {
              data.map((item)=>(
                <div className="card" style={{width:"20%"}}>
                <img src={item.itemImage} className="card-img-top" alt="no img"></img>
                <div className="card-body">
                  <h5 className="card-title">{item.itemTitle}</h5>
                  <p className="card-text">{item.itemPrice}</p>
                  <a href={data.itemLink} className="btn btn-primary">Buy here</a>
                  <Counter></Counter>
                </div>
              </div>
                
               ))
           }
        </div>
    )
}
export default ProductCatalog