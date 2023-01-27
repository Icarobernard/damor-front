import React, { useState, useEffect } from "react";
import Router from "next/router"
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/SimpleHeader.js";
import moment from "moment";
function Tables() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetch(`http://localhost:1337/api/atestados?pagination[page]=${page}&pagination[pageSize]=2`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [page])


    return (
        <>
            <Header page={page} setData={setData} />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                {/* <h3 className="mb-0">Listagem de atestado dos servidores</h3> */}
                                <Button onClick={() => { Router.push("/admin/certificate/register") }} size="sm" color="success"> + Cadastrar novo atestado</Button>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive hover>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Prontuário </th>
                                        <th scope="col">Motivo</th>
                                        <th className=" sort" data-sort="status" scope="col">
                                            Status
                                        </th>
                                        <th scope="col">data de registro</th>


                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.length > 0 && data?.data.map((value, index) => {
                                        return <>
                                            <tr onClick={() => { sessionStorage.setItem('certificate', JSON.stringify(value)); Router.push('certificate/update') }} style={{ cursor: 'pointer' }} key={index} >
                                                <th scope="row">
                                                    {value.attributes.nome}
                                                </th>
                                                <td>{value?.attributes?.prontuario}</td>
                                                <td>{value?.attributes?.motivo}</td>
                                                <td>
                                                    {value?.attributes?.status ? <Badge className=" badge-dot mr-4">
                                                        <i className=" bg-success"></i>
                                                        <span className=" status">homologado</span>
                                                    </Badge> : <Badge className=" badge-dot mr-4">
                                                        <i className=" bg-warning"></i>
                                                        <span className="status">pendente</span>
                                                    </Badge>}
                                                </td>
                                                <td>{moment(value?.attributes?.createdAt).format('lll')}</td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={(e) => e.preventDefault()}
                                                            >
                                                                Deletar
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={(e) => e.preventDefault()}
                                                            >
                                                                Editar
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        </>

                                    })}


                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination
                                        className="pagination justify-content-end mb-0"
                                        listClassName="justify-content-end mb-0"
                                    >
                                        <PaginationItem className={page > 1 ? "" : "disabled"}>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => setPage(page - 1)}
                                                tabIndex="-1"
                                                disabled={page > 1 ? true : false}
                                            >
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className={page == data?.meta?.pagination?.pageCount ? "disabled" : ""}>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => setPage(page + 1)}
                                                disabled={page == data?.meta?.pagination?.pageCount ? true : false}
                                            >
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">Next</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                    <p> Total de páginas: {data?.meta?.pagination?.pageCount}</p>
                                </nav>

                            </CardFooter>
                        </Card>
                    </div>
                </Row>

            </Container>
        </>
    );
}

Tables.layout = Admin;

export default Tables;
