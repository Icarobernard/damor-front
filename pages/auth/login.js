import React, { useState, useEffect } from "react";
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
import Router from "next/router";
function Login() {
  const [value, setValue] = useState({ identifier: '', password: '' })
  const [data, setData] = useState(null)
  const [message, setMessage] = useState("")
  async function LoginFunction() {
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await response.json();
    console.log(data)
    setData(data)
    if (data.error) {
      setMessage(data.error.message)
    }

    if (response.status == 200) {
      sessionStorage.setItem('user', JSON.stringify(data))
      Router.push("/admin/dashboard");
    }

  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h3>Login</h3>
              <small>Acesse com suas credenciais</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => { setValue({ ...value, identifier: e.target.value }) }}
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
                    onChange={(e) => { setValue({ ...value, password: e.target.value }) }}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  {/* <span className="text-muted">Lembrar de mim</span> */}
                </label>
              </div>
              <p className="text-center" styles="color: red;">{message}</p>
              <div className="text-center">
                <Button onClick={() => { LoginFunction() }} className="my-4" color="primary" type="button">
                  Logar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-right" xs="12">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => Router.push('/auth/register')}
            >
              <small>Criar nova conta</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
