import React, { useState } from "react";
import Router from "next/router";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import ModalMessage from "../../components/Modal/modal";
function Register() {

  const [form, setForm] = useState({ username: '', email: '', password: '', type: '' })
  const [message, setMessage] = useState('')
  const [data, setData] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  async function RegisterFunction() {
    const response = await fetch("http://localhost:1337/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data)
    setData(data)
    if (data.error) {
      setMessage(data.error.message)
    }
    if (response.status == 201) {
      setModalOpen(true)
    }
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <h3>Cadastrar usuário</h3>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Nome" type="text" onChange={(e) => { setForm({ ...form, username: e.target.value }) }} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                {
                  message
                }
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <>
                    <div className=" custom-control custom-radio">
                      <input
                        className=" custom-control-input"
                        id="customRadio1"
                        name="customRadio"
                        value="admin"
                        type="radio"
                        onClick={(e) => { setForm({ ...form, type: e.target.value }) }}
                      ></input>
                      <label className=" custom-control-label" htmlFor="customRadio1">
                        Administrador geral
                      </label>
                    </div>
                    <div className=" custom-control custom-radio">
                      <input
                        className=" custom-control-input"
                        id="customRadio2"
                        name="customRadio"
                        type="radio"
                        value="doctor"
                        onChange={(e) => { setForm({ ...form, type: e.target.value }) }}
                      ></input>
                      <label className=" custom-control-label" htmlFor="customRadio2">
                        Médico
                      </label>
                    </div>
                    <div className=" custom-control custom-radio">
                      <input
                        className=" custom-control-input"
                        id="customRadio3"
                        name="customRadio"
                        type="radio"
                        value="user"
                        onChange={(e) => { setForm({ ...form, type: e.target.value }) }}
                      ></input>
                      <label className=" custom-control-label" htmlFor="customRadio3">
                        Administrativo
                      </label>
                    </div>
                  </>
                </Col>
              </Row>
              <ModalMessage modalOpen={modalOpen}
                setModalOpen={() => { setModalOpen }}
                message={"Usuário cadastrado com Sucesso!"}
                redirect={() => { Router.push("/auth/login"); }}
              />
              <div className="text-center">
                <Button onClick={() => { RegisterFunction() }} className="mt-4" color="primary" type="button">
                  Criar conta
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
