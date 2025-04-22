import { useEffect, useState } from "react"

function App() {
 const[imgUrl,setImgUrl]= useState("");

 const getImage= async()=>{
  const request = await fetch("https://dog.ceo/api/breeds/image/random")
  const data = await request.json();
  setImgUrl(data.message);
 }

useEffect(()=>{
  getImage();
},[])

  return (
    <>      
      <h1>React-dog</h1> 
      <img src={imgUrl} width="200px"/> 
      <div>{imgUrl}</div>
      <button onClick={getImage}>Get image</button>    
    </>
  )
}

export default App
