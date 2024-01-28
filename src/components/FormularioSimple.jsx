import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const FormularioSimple = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length === 0 || apellido.length === 0 || dni.length === 0 || email.length === 0) {
        Swal.fire({
            icon: "error",
            iconColor: "red",
            title: "Ah ocurrido un error 🤷‍♂️👀",
            text: "Debes completar todos los datos",
            background: "",
            color: "red",
            confirmButtonColor: "red",
          });
          
    } 
    else if(dni.length < 7){

        Swal.fire({
            icon: "error",
            title: "Error en DNI",
            text: "Ingresa un DNI válido (7 u 8 dígitos)",
          });
    }
    
  
    else {
        Swal.fire({
            icon: "success",
            iconColor: "#198754",
            title: "Todo Correcto 😁👍",
            text: "Datos enviados",
            background: "#cbf1c4",
            color: "#198754",
            showConfirmButton: false,});
    }
  };

  return (
    <Container >
        
      
      <Form className="row p-3 justify-content-center" onSubmit={handleSubmit}>
        
    
      <Form.Group className="mb-3 col-md-6">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Nombre"
          minLength={3}
          maxLength={13}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
          </Form.Group>
     
          <Form.Group className="mb-3 col-md-6">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          minLength={3}
          maxLength={13}
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        </Form.Group>
      
        <Form.Group className="mb-3 col-md-6">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="number"
          name="dni"
          minLength={7}
          maxLength={8}
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3 col-md-6">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         </Form.Group>
        <Button className="col-md-6 p-2 mt-4" type="submit">Enviar</Button>
      </Form>
   
    </Container>
  );
};

export default FormularioSimple;