import ProductCatalog from "./components/ProductCatalog"
const data=[{
  itemPrice:"10000",
  itemLink:"https://www.amazon.in/dp/B087JYBBSR/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-5&pf_rd_r=TTG6G54Z6XV87V7ST17Z&pf_rd_t=101&pf_rd_p=6e70ba05-ce3b-4e81-9c9d-651b9c33f4cd&pf_rd_i=26190167031",
  itemImage:"https://m.media-amazon.com/images/I/71sFjIGl9UL._SX355_.jpg",
  itemTitle:"AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
},
{
  itemPrice:"10000",
  itemLink:"https://www.amazon.in/dp/B087JYBBSR/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-5&pf_rd_r=TTG6G54Z6XV87V7ST17Z&pf_rd_t=101&pf_rd_p=6e70ba05-ce3b-4e81-9c9d-651b9c33f4cd&pf_rd_i=26190167031",
  itemImage:"https://m.media-amazon.com/images/I/71sFjIGl9UL._SX355_.jpg",
  itemTitle:"AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
}
]

function App(){
  return(
    <div>
     <ProductCatalog data={data}></ProductCatalog>
    </div>
  )
}
export default App