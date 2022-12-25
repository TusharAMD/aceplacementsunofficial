import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";

function Admin(){
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading  } = useAuth0();

    /* Inputs state */
    const[companyname,setCompanyName] = useState("");
    const[packages,setPackage] = useState("");
    const[dateposted,setDateposted] = useState("");
    const[deadline,setDeadline] = useState("");
    const[logo,setLogo] = useState("");
    const[discord,setDiscord] = useState("");
    const[status,setStatus] = useState("");
    const[message,setMessage] = useState("");
    const[link,setLink] = useState("");
    /* */

    function onNewHandler(){
        axios.post("http://127.0.0.1:5000/newentry",{companyname:companyname,packages:packages,dateposted:dateposted,deadline:deadline,logo:logo,discord:discord,status:status,message:message,link:link}
        )
        .then(res=>{
            const data = res.data
            console.log(res.data)
        }
        )
    }

    
    if(isAuthenticated && user.email=="atharvaplacementsunofficial@gmail.com"){
    return(
    <div className="admindiv">
        <br/>
            <div style={{fontSize:"2em",backgroundColor:"white", border:"2px solid black", borderRadius:"10px", marginBottom:"10px", padding:"2px"}}>New Entry</div>
        
            <div className="NewEntry">
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control onChange={(e)=>{setCompanyName(e.target.value)}} placeholder="Company Name" />
                <Form.Label>Package</Form.Label>
                <Form.Control onChange={(e)=>{setPackage(e.target.value)}} placeholder="Package" />
                <Form.Label>Date Posted</Form.Label>
                <Form.Control type="datetime-local" onChange={(e)=>{setDateposted(e.target.value)}} placeholder="Date Posted" />
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="datetime-local" onChange={(e)=>{setDeadline(e.target.value)}} placeholder="Deadline" />
                <Form.Label>Logo</Form.Label>
                <Form.Control onChange={(e)=>{setLogo(e.target.value)}} placeholder="Logo" />
                <Form.Label>Status</Form.Label>
                <Form.Select onChange={(e)=>{setStatus(e.target.value)}} >
                    <option>Select a value here</option>
                    <option value="Registration Open">Registration Open</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </Form.Select>
                <Form.Label>Discord</Form.Label>
                <Form.Control onChange={(e)=>{setDiscord(e.target.value)}} placeholder="Discord" />
                <Form.Label>Update</Form.Label>
                <Form.Control onChange={(e)=>{setMessage(e.target.value)}} placeholder="Message" />
                <Form.Control onChange={(e)=>{setLink(e.target.value)}} placeholder="Link" />


            </Form.Group>

           
            <Button onClick={()=>{onNewHandler();console.log({companyname,packages,dateposted,deadline,logo,discord,status,message,link})}} variant="primary" >
                Submit New Entry
            </Button>
            </Form>
        </div>
        <br/>

        <div style={{fontSize:"2em",backgroundColor:"white", border:"2px solid black", borderRadius:"10px", marginBottom:"10px", padding:"2px"}}>Update Entry</div>
        <div className="UpdateEntry">
            Update Form
        </div>
    </div>
    )
    }
    else if(isAuthenticated){
        return(
            <div>
                <img src="https://media.baamboozle.com/uploads/images/113315/1632237721_46554_gif-url.gif"></img>
            </div>
        )
    }
}
export default Admin