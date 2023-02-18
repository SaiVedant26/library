function Login(){
    return(
    <form id="login">  
        <br></br>  
        <label><b>User Name: </b></label>    
        <input type="text" name="Uname" id="Uname" placeholder="Username"></input>  
        <br></br>    
        <label><b>Password:  </b></label>    
        <input type="Password" name="Pass" id="Pass" placeholder="Password"></input>    
        <br></br>    
        <input type="button" name="log" id="log" value="Log In"></input>     
        <br></br>        
    </form> 
  )
}
export default Login;