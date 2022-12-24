import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function List() {
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

        let array = [{ "Name": "Lenden", "Package": "7 LPA", "DatePosted": "21th Nov 2022", "Deadline": "22nd Nov 2022", "logo": "https://www.lendenclub.com/wp-content/uploads/2020/09/LDC_Light.png", "Updates": {
            "1": {"msg": "Registration Phase", "link": "https://classroom.google.com/c/NDk2MjI5MTMyMTIy/p/NTA3NDQyMDUzODk3/details"},
            "2":{"msg":"Shortlisted Students","link":"https://classroom.google.com/c/NDk2MjI5MTMyMTIy/p/NTA3NTE3MjE1ODQx/details"},
            "3":{} } 
        }]

        return (<>
            {array.map((item, index) => {


                return (
                    <>
                        <Card>
                            <Card.Img style={{ width: "10em" }} variant="top" src={item.logo} />
                            <Card.Body style={{ color: "black" }}>

                                <Card.Title>{item.Name}</Card.Title>
                                <Card.Text>
                                    {/*item.Updates[item.Updates.length - 1]*/}
                                    {/*console.log(`${item.Updates[0]}`)*/}
                                    {/*console.log(`${Math.max(...Object.keys(item.Updates))}`)*/}
                                </Card.Text>
                                <div className='carddiv'>
                                    <div>Date Posted: {item.DatePosted}</div>
                                    <div>Deadline: {item.Deadline}</div>
                                    <div>Package: {item.Package}</div>
                                </div>
                                <br />
                                <div className='carddiv'>
                                    <div>Status: <span style={{ color: color1 }}>Completed</span></div>
                                    <div><img style={{ width: "2em" }} src='https://cdn-icons-png.flaticon.com/512/2111/2111370.png'></img></div>
                                    <div>Add to WatchList</div>
                                </div>
                                <br />
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <br />
                    </>
                )

            })}
        </>)
    }
}
export default List