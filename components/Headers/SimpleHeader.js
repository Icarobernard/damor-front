import React, { useEffect, useState } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

function Header({ setData, page }) {
    const [search, setSearch] = useState()
    useEffect(() => {
        if (search == "") {
            fetch(`http://localhost:1337/api/atestados?pagination[page]=${page}&pagination[pageSize]=2`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
        } else {
            fetch(`http://localhost:1337/api/atestados?filters[nome][$contains]=${search}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
        }


    }, [search])
    return (
        <>
            <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body">
                        <Form className="navbar-search navbar-search-dark form-inline  d-none d-md-flex ml-lg-auto">
                            <FormGroup className="mb-0">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input onChange={(e) => { setSearch(e.target.value) }} placeholder="Pesquisar" type="text" />
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Header;
