import React, { useState, useEffect } from "react";
import data from './data.json'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { nameContext, ageContext, hobbyContext, imgContext } from "./Insert";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import { FaUserEdit } from "react-icons/fa";
import '../App.css'


const ToDo=()=>{
  
  const [items, setItems] = useState([]);
  const pname1=useContext(nameContext);
  const page1=useContext(ageContext);
  const phobby1=useContext(hobbyContext);
  const pimg1=useContext(imgContext);
  
  const [uname,setUname]=useState('');
  const [uage,setUage]=useState('');
  const [uhobby,setUhobby]=useState('');
  const [uid,setUid]=useState(0);
  const [uimg,setUimg]=useState('');
 

  // const {name,hobby} = useContext(todoContext);

  // console.log("here =>"+pname1+page1+phobby1);

  useEffect(() => {
    setItems(data);
  }, []);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const AddToJson=()=>{
      if( uid==0)
      {
        if(pname1.trim() && page1.trim() && phobby1.trim() !=''){
            const NewData={ id:items.length+1, name:pname1, age:page1, hobby:phobby1, img:pimg1 };
            setItems([...items,NewData]);
            
          }
      }
    }
    
    const EditItem=(id,name,age,hobby,img)=>{
      if(uid==0)
      {
        setUname(name);
        setUage(age);
        setUhobby(hobby);
        setUid(id);
        setUimg(img);
        deleteItem(id);
      }
    }
    const handleFileChange = (event) => {
      const file = event.target.files[0]; 
      if (file) {
        setUimg(file.name); 
        // console.log("fname=>"+file.name);
      }
    };
    const UpdatePerson=()=>{
      if(uid != 0 )
      {
          if(uname != uid.name || uage != uid.age || uhobby != uid.hobby )
          {
            
              console.log(uid.name);
              const NewData={ id:uid, name:uname, age:uage, hobby:uhobby, img:uimg };
              setItems([...items,NewData]);
              setUid(0);
              setUname('');
              setUage('');
              setUhobby('');
              setUimg('');
            
              
          }
      }
      }
    
    const CancleUpdate=()=>{
      if(uid!=0)
      {
        const NewData={ id:uid, name:uname, age:uage, hobby:uhobby, img:uimg };
        setItems([...items,NewData]);
        setUid(0);
        setUname('');
        setUage('');
        setUhobby('');
        setUimg('');
      }
    }

  return (
    <div>
      <Row className="border mt-2" style={{backgroundColor:'rgb(244, 252, 248)'}}>
        <Col className="d-flex justify-content-start pt-2" md={4}>
              <p className="fw-bold fs-5 ms-3">Name</p> 
        </Col>
        <Col className="d-flex justify-content-start pt-2 fs-5 fw-bold" md={2}>
              <p>Age</p>     
        </Col>
        <Col className="d-flex justify-content-start align-Items-center pt-2 pb-0 fs-5 fw-bold" md={2}>
               <p>Hobby</p>
        </Col>
        <Col className="d-flex justify-content-start align-Items-center pt-2 pb-0 fs-5 fw-bold" md={2}>
               <p>Photo</p>
        </Col>
        <Col md={2}>
          <Button className="mt-1 fw-bold" style={{width:'63px',height:'80%'}} onClick={AddToJson}>Add</Button>
        </Col>
      </Row>
      {items.map((item) => (
        <div key={item.id}>
            <Row className="data border p-0 mt-0">
                <Col className="d-flex justify-content-start border-right-1 mt-auto mb-auto" md={4}>
                {item.name}
                </Col>
                <Col className="d-flex justify-content-start mt-auto mb-auto" md={2}>
                    {item.age}
                </Col>
                <Col className="d-flex justify-content-start mt-auto mb-auto" md={2}>
                    {item.hobby}
                </Col>
                <Col className="d-flex justify-content-start mt-auto mb-auto" md={2}>
                    
                    <img src={item.img} style={{maxWidth:'25%'}}></img>
                </Col>
                <Col md={1}>
                <MdDelete className="mt-3" style={{color:'red'}}  onClick={() => deleteItem(item.id)}></MdDelete>
                </Col>
                <Col md={1}>
                <FaUserEdit className="mt-3" style={{color:'#9900cc'}} onClick={() => EditItem(item.id,item.name,item.age,item.hobby,item.img)}></FaUserEdit>
                </Col>

            </Row> 
        </div>
      ))}
      <Row className="mt-5 border p-2">
                <Col md={4}>
                    <Form.Control className="me-3 border-0" style={{width:'100%'}} value={uname} onChange={(e)=>setUname(e.target.value)} type='text'></Form.Control>   
                </Col>
                <Col md={2}>
                    <Form.Control className="me-3 border-0" style={{width:'100%'}} value={uage} onChange={(e)=>setUage(e.target.value)} type='text'></Form.Control>
                </Col>
                <Col md={2}>
                    <Form.Control className="me-3 border-0" style={{width:'100%'}} value={uhobby} onChange={(e)=>setUhobby(e.target.value)} type='text'></Form.Control>
                </Col>
                <Col md={2}>
                    <Form.Control className="me-3 border-0" style={{width:'100%'}} onChange={handleFileChange} type='file'></Form.Control>
                </Col>
                <Col md={1} className="">
                    <Button variant="outline-success fw-bold"  onClick={UpdatePerson} >Update</Button>
                </Col>
                <Col md={1}>
                    <Button variant="outline-warning fw-bold" onClick={CancleUpdate} >Cancle</Button>
                </Col>
            </Row> 
    </div>
  );
}

export default ToDo;