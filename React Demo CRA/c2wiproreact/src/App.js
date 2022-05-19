import { useState } from "react"
import TextField from "@mui/material/TextField"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function App(props){
 /*const [role,setRole]=useState("admin")
  const updateRole=(e)=>{
    e.preventDefault()
    setRole("trainee")
  }
  return(
    <>
    {console.log(role)}
    <h1>Hello {props.prop1}</h1>
    <h2>{role}</h2>
    <button onClick={updateRole}>update</button>
    </>
  )*/
  return(
    <div>
<TextField id="filled-basic" label="Filled" variant="filled" />
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          some content
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   { props.studentdata.map((item)=>
    (
      <div>
        <h2>{item.fname}</h2>
        <h3>{item.email}</h3>
      </div>
     
    ))}
    </div>
  )
}
export default App