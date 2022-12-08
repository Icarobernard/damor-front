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
    Container,
    Row,
    Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/CertificateHeader.js";

function Register() {
    const [form, setForm] = useState({ nome: '', endereco: '', bairro: '', cargo: '', nascimento: '', telefone: '', secretaria: '', matricula: '', prontuario: '', efetivo: false, efetividade: 0, regime_juridico: '', contratos_temporarios: 0, descricao: '', inicio_tratamento: '', fim_tratamento: '', acidente_trabalho: false, artigo_115: false, motivo: '', pos_afastamento: '', status: false, vinculo: 0 })
    const [tratamento, setTratamento] = useState(true)
    const [data, setData] = useState()
    const [message, setMessage] = useState('')
    async function RegisterCertificate() {
        const response = await fetch("http://localhost:1337/api/atestados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: form }),
        });
        const data = await response.json();
        console.log(data)
        setData(data)
        if (data.error) {
            console.log(data.error)
            setMessage(data.error.message)
        }

        if (response.status == 200) {
            Router.push("/admin/certificate")
        }

    }
    return (
        <>
            <UserHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Cadastro atestado</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Informações do servidor
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Nome
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-username"
                                                        placeholder="Nome do servidor"
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, nome: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-nascimento"
                                                    >
                                                        Data de nascimento
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="nput-nascimento"
                                                        placeholder=""
                                                        type="date"
                                                        onChange={(e) => { setForm({ ...form, nascimento: e.target.value }) }}

                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-matricula"
                                                    >
                                                        Matrícula
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-matricula"
                                                        placeholder="número"
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, matricula: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-cargo"
                                                    >
                                                        Cargo
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-cargo"
                                                        placeholder="Ocupação"
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, cargo: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                    </div>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-bairro"
                                                    >
                                                        Efetivo na PJF?
                                                    </label>
                                                    <div className=" custom-control custom-radio mb-3">
                                                        <input
                                                            className=" custom-control-input"
                                                            id="customRadio1"
                                                            name="customRadio"
                                                            type="radio"
                                                            onChange={(e) => { setForm({ ...form, efetivo: true }) }}
                                                        ></input>
                                                        <label className=" custom-control-label" htmlFor="customRadio1">
                                                            Sim
                                                        </label>
                                                    </div>
                                                    <div className=" custom-control custom-radio">
                                                        <input
                                                            className=" custom-control-input"
                                                            id="customRadio2"
                                                            name="customRadio"
                                                            type="radio"
                                                            onChange={(e) => { setForm({ ...form, efetivo: false }) }}
                                                        ></input>
                                                        <label className=" custom-control-label" htmlFor="customRadio2">
                                                            Não
                                                        </label>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-phone"
                                                    >
                                                        Vínculo com a PJF
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-phone"
                                                        placeholder="Quantos?"
                                                        type="number"
                                                        onChange={(e) => { setForm({ ...form, vinculo: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label htmlFor="exampleFormControlSelect1">Regime jurídico</label>
                                                    <Input onChange={(e) => { setForm({ ...form, regime_juridico: e.target.value }) }} id="exampleFormControlSelect1" type="select">
                                                        <option value={"Estatutário"}>Estatutário</option>
                                                        <option value={"Contrato Comissionado"}>Contrato Comissionado</option>
                                                        <option value={"CLT"}>CLT</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Endereço
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="ex: Rua Mihail Kogalniceanu, numero 8 Apt 1"
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, endereco: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-bairro"
                                                    >
                                                        Bairro
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-bairro"
                                                        placeholder="Distrito/Bairro"
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, bairro: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-phone"
                                                    >
                                                        Telefone
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-phone"
                                                        placeholder="(ddd)-####-###"
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, telefone: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-secretaria"
                                                    >
                                                        Secretaria
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-secretaria"
                                                        placeholder="EX: SRH, DEG, STDA... "
                                                        type="text"
                                                        onChange={(e) => { setForm({ ...form, secretaria: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-prontuario"
                                                    >
                                                        Prontuário
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-prontuario"
                                                        placeholder="Nº Prontuário"
                                                        type="number"
                                                        onChange={(e) => { setForm({ ...form, prontuario: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-contrato"
                                                    >
                                                        Contratos temporários
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-contrato"
                                                        placeholder="Quantos?"
                                                        type="number"
                                                        onChange={(e) => { setForm({ ...form, contratos_temporarios: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Description */}
                                    <h6 className="heading-small text-muted mb-4">Motivo licença/Afastamento</h6>
                                    <div className="pl-lg-4">
                                        <Col lg="12">
                                            <FormGroup>
                                                <label htmlFor="exampleFormControlSelect1">Motivo do afastamento</label>
                                                <Input onChange={(e) => { setForm({ ...form, motivo: e.target.value }) }} id="exampleFormControlSelect1" type="select">
                                                    <option>Selecione</option>
                                                    <option value={"Atestado médico/Odontológico"}>Atestado médico/Odontológico</option>
                                                    <option value={"Exames complementares"}>Exames complementares</option>
                                                    <option value={"Licença maternidade/Prorrogação"}>Licença maternidade/Prorrogação</option>
                                                    <option value={"Licença para tratamento de saúde"}>Licença para tratamento de saúde</option>
                                                    <option value={"Outros"}>Outros</option>
                                                    <option value={"Perícia"}>Perícia</option>
                                                    <option value={"Prorrogação de benefício/Readaptação funcional"}>Prorrogação de benefício/Readaptação funcional</option>
                                                    <option value={"Sumário de alta hospitalar"}>Sumário de alta hospitalar</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <FormGroup>
                                            <label>O servidor deve se afastar do trabalho para:</label>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Descrição"
                                                rows="4"
                                                type="textarea"
                                                onChange={(e) => { setForm({ ...form, descricao: e.target.value }) }}
                                            />
                                        </FormGroup>
                                        <Col lg="12">
                                            <FormGroup>
                                                <label htmlFor="exampleFormControlSelect1">Tipo de tratamento</label>
                                                <Input id="exampleFormControlSelect1" type="select">
                                                    <option onClick={(e) => { setTratamento(true) }}>Tratamento da saúde</option>
                                                    <option onClick={(e) => { setTratamento(false) }}>Maternidade</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    {tratamento && <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-phone"
                                                    >
                                                        O tratamento é consequência de acidente de trabalho?
                                                    </label>
                                                    <div className=" custom-control custom-radio custom-control-inline">
                                                        <input
                                                            className=" custom-control-input"
                                                            id="customRadioInline1"
                                                            name="customRadioInline1"
                                                            type="radio"
                                                            onChange={(e) => { setForm({ ...form, acidente_trabalho: true }) }}
                                                        ></input>
                                                        <label className=" custom-control-label" htmlFor="customRadioInline1">
                                                            Sim
                                                        </label>
                                                    </div>
                                                    <div className=" custom-control custom-radio custom-control-inline">
                                                        <input
                                                            className=" custom-control-input"
                                                            id="customRadioInline2"
                                                            name="customRadioInline1"
                                                            type="radio"
                                                            onChange={(e) => { setForm({ ...form, acidente_trabalho: false }) }}
                                                        ></input>
                                                        <label className=" custom-control-label" htmlFor="customRadioInline2">
                                                            Não
                                                        </label>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-phone"
                                                    >
                                                        O afastamento se enquadra no parágrafo único do artigo 115, da LEI Nº 8710/95:
                                                    </label>
                                                    <div className=" custom-control custom-checkbox mb-3">
                                                        <input
                                                            className=" custom-control-input"
                                                            id="customCheck1"
                                                            type="checkbox"
                                                            onClick={() => { setForm({ ...form, artigo_115: true }) }}
                                                        ></input>
                                                        <label className=" custom-control-label" htmlFor="customCheck1">
                                                            <span>Selecione se sim </span>
                                                        </label>
                                                    </div>
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-data-inicio"
                                                    >
                                                        Inicio do tratamento
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-data-inicio"
                                                        placeholder=""
                                                        type="date"
                                                        onChange={(e) => { setForm({ ...form, inicio_tratamento: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-data-inicio"
                                                    >
                                                        Fim do tratamento
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-data-inicio"
                                                        placeholder=""
                                                        type="date"
                                                        onChange={(e) => { setForm({ ...form, fim_tratamento: e.target.value }) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>}
                                    <Row>
                                        <Col lg="12">
                                            <FormGroup>
                                                <label htmlFor="exampleFormControlSelect1">Após o período de afastamento</label>
                                                <Input onChange={(e) => { setForm({ ...form, pos_afastamento: e.target.value }) }} id="exampleFormControlSelect1" type="select">
                                                    <option>Selecione</option>
                                                    <option value={"O Servidor deverá reassumir imediatamente suas atividades"}>O Servidor deverá reassumir imediatamente suas atividades</option>
                                                    <option value={"Voltar para agendamento até sete dias antes do término da licença"}>Voltar para agendamento até sete dias antes do término da licença</option>
                                                    <option value={"Encaminhado à perícia / Junta médica"}>Encaminhado à perícia / Junta médica</option>
                                                    <option value={"Encaminhado à readaptação funcional"}>Encaminhado à readaptação funcional</option>
                                                    <option value={"Manter afastamento"}>Manter afastamento</option>
                                                    <option value={"Encaminhado ao INSS"}>Encaminhado ao INSS</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            {message}
                                            <Button onClick={() => { RegisterCertificate() }} color="success" size="lg" block>Enviar</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

Register.layout = Admin;

export default Register;
