import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function CertificateHeader() {
    return (
        <>
            <div
                className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                    minHeight: "20px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/certificate.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >
                {/* Mask */}
                <span className="mask bg-gradient-default opacity-8" />
                {/* Header container */}
                {/* <Container className="d-flex align-items-center" fluid>
                    <Row>
                        <Col lg="7" md="10">
                            <h3 className="display-2 text-white">Cadastrar atestado</h3>
                        </Col>
                    </Row>
                </Container> */}
            </div>
        </>
    );
}

export default CertificateHeader;
