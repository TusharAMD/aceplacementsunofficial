import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';

function List() {
    const [open, setOpen] = useState(false);

    return (
        <div className="list">

            <div>
                <br />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "black", borderRadius: "10px", backgroundImage: "url('https://i.ibb.co/GpdRdy7/image.png')", backgroundColor: "white", height: "200px" }}>
                    <div className='headingcenter'>Unofficial ACE Placements</div>
                    {/*<img className='headingbanner' src='https://i.ibb.co/GpdRdy7/image.png'></img>*/}
                </div>
                <br />
                <Companies />
            </div>
        </div>
    )
    function Companies() {
        let color1 = "green"
        let color2 = "red"

        let currentStatusIndicator = {"Registration Open":"green","Ongoing":"#808080","Completed":"red"}

        let array = [{ 
            "Name": "Lenden Club", 
            "Package": "7", 
            "DatePosted": "21th Nov 2022", 
            "Deadline": "22nd Nov 2022", 
            "Logo": "https://www.lendenclub.com/wp-content/uploads/2020/09/LDC_Light.png",
            "Status":"Completed",
            "Discord":"", 
            "Updates": {
                "1": {"msg": "Registration Phase", "link": "https://classroom.google.com/c/NDk2MjI5MTMyMTIy/p/NTA3NDQyMDUzODk3/details"},
                "2":{"msg":"Shortlisted Students are displayed on Classroom","link":"https://classroom.google.com/c/NDk2MjI5MTMyMTIy/p/NTA3NTE3MjE1ODQx/details"},
                "3":{"msg":"Shortlisted Students are displayed on Classroom (2)","link":"https://classroom.google.com/c/NDk2MjI5MTMyMTIy/p/NTQwODI4ODkyODYw/details"},
                "4":{"msg":"Interview Call","link":"https://classroom.google.com/c/NDk2MjI5MTMyMTIy/p/NTA5MDU3ODg3MTE0/details"},
                "5":{"msg":"Final Selection Done","link":""},
                } 
        }]

        return (<>
            {array.map((item, index) => {


                return (
                    <>
                        <Card style={{backgroundColor:"rgba(255,255,255,0.7)"}}>
                            <Card.Img style={{ width: "10em" }} variant="top" src={item.Logo} />
                            <Card.Body style={{ color: "black" }}>

                                <Card.Title>{item.Name}</Card.Title>
                                <Card.Text style={{fontFamily: "'Poppins', sans-serif"}}>
                                    
                                    
                                    {/*item.Updates[item.Updates.length - 1]*/}
                                    {/*console.log(`${item.Updates[0]}`)*/}
                                    {/*console.log(`${Math.max(...Object.keys(item.Updates))}`)*/}
                                    
                                    <hr/>
                                    <div><u>Latest Update:</u></div>
                                    <div style={{border:"2px dashed black"}}>
                                    {item.Updates[Math.max(...Object.keys(item.Updates))]["msg"]}<br/>
                                    <a href={item.Updates[Math.max(...Object.keys(item.Updates))]["link"]}>Classroom Link</a>
                                    </div>
                                </Card.Text>
                                <div className='carddiv'>
                                    <div>Date Posted: {item.DatePosted}</div>
                                    <div>Deadline: {item.Deadline}</div>
                                    <div>Package: <span style={{color:"white",border:"2px dotted #012522",backgroundColor:"#016b62",borderRadius:"100%",padding:"5px"}}>{item.Package} LPA</span></div>
                                </div>
                                <br />
                                <div className='carddiv'>
                                    <div>Status: <span style={{ color: currentStatusIndicator[item["Status"]] }}>{item["Status"]}</span></div>
                                    <div><a href="https://discord.gg/dffp5Cvyqj"><img style={{ width: "2em" }} src='https://cdn-icons-png.flaticon.com/512/2111/2111370.png'></img></a></div>
                                    <div>Add to WatchList</div>
                                </div>
                                <br />
                                
                                <Button  onClick={() => setOpen(!open)} variant="primary">See all Updates</Button>
                                
                                <Collapse in={open}>
                                    <div className='updatenotify'>
                                        <Updatesnotifier item={item} />
                                    </div>
                                </Collapse>

                            </Card.Body>
                        </Card>
                        <br />
                    </>
                )

            })}
        </>)
    }

    function Updatesnotifier(props){
        let updatearray = props.item.Updates;
        console.log(updatearray)
        return(<>
        <br/>
        <ol>
        {/*JSON.stringify(props.item.Updates)*/}
        {
            Object.keys(updatearray).map((item,index)=>{
                return(
                <>
                {/*JSON.stringify(item)*/}
                
                <li className='eachupdate'>
                    <div>{item}</div>
                    <div>{updatearray[item]["msg"]}</div>
                    <div><a href={updatearray[item]["link"]}>Classroom Link</a></div>
                </li>
     
                </>
                )
            })
        }
        </ol>
        </>)
    }
}
export default List