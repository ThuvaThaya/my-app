import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
// import Button from '@restart/ui/esm/Button';
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo3.png";
import loan from "../loan.png";

function Home() {
  const [result, setResult] = useState(null);
  function onPredict(data) {
    // Simple POST request with a JSON body using fetch
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://fdm-assignment.herokuapp.com/home", options)
      .then((response) => response.json())
      .then((data) => setResult(data.Result));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      Income: parseFloat(event.target.Income.value),
      Age: parseInt(event.target.Age.value),
      Experience: parseInt(event.target.Experience.value),
      "Married/Single": parseInt(event.target.Married_Single.value),
      House_Ownership: parseInt(event.target.House_Ownership.value),
      Car_Ownership: parseInt(event.target.Car_Ownership.value),
      Profession: parseInt(event.target.Profession.value),
    };
    console.log(data);
    onPredict(data);
  };
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="45"
                height="45"
                className="d-inline-block align-top"
              />{" "}
              <span
                style={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  padding: "20px",
                }}
              >
                {" "}
                Finance Company
              </span>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-main">
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                    </div>
                    <div>
                      <h1 style={{ margin: "30px" }}>Eligibility For Loan</h1>
                      <div className="page-title-subheading"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div style={{ width: "50%", float: "left" }}>
                  <img
                    src={loan}
                    style={{ margin: "25px", width: "75%", height: "75%" }}
                  ></img>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <Card>
                    <Form
                      onSubmit={onSubmit}
                      style={{
                        marginLeft: "5%",
                        marginTop: "3%",
                        marginBottom: "3%",
                      }}
                    >
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          Profession
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Select
                            aria-label="Default select example"
                            name="Profession"
                          >
                            <option>--Select one--</option>
                            <option value="0">Air_traffic_controller</option>
                            <option value="1">Analyst</option>
                            <option value="2">Architect</option>
                            <option value="3">Army_officer</option>
                            <option value="4">Artist</option>
                            <option value="5">Aviator</option>
                            <option value="6">Biomedical_Engineer</option>
                            <option value="7">Chartered_Accountant</option>
                            <option value="8">Chef</option>
                            <option value="9">Chemical_engineer</option>
                            <option value="10">Civil_engineer</option>
                            <option value="11">Civil_servant</option>
                            <option value="12">Comedian</option>
                            <option value="13">
                              Computer_hardware_engineer
                            </option>
                            <option value="14">Computer_operator</option>
                            <option value="15">Consultant</option>
                            <option value="16">Dentist</option>
                            <option value="17">Design_Engineer</option>
                            <option value="18">Designer</option>
                            <option value="19">Drafter</option>
                            <option value="20">Economist</option>
                            <option value="21">Engineer</option>
                            <option value="22">Fashion_Designer</option>
                            <option value="23">Financial_Analyst</option>
                            <option value="24">Firefighter</option>
                            <option value="25">Flight_attendant</option>
                            <option value="26">Geologist</option>
                            <option value="27">Graphic_Designer</option>
                            <option value="28">Hotel_Manager</option>
                            <option value="29">Industrial_Engineer</option>
                            <option value="30">Lawyer</option>
                            <option value="31">Librarian</option>
                            <option value="32">Magistrate</option>
                            <option value="33">Mechanical_engineer</option>
                            <option value="34">Microbiologist</option>
                            <option value="35">Official</option>
                            <option value="36">Petroleum_Engineer</option>
                            <option value="37">Physician</option>
                            <option value="38">Police_officer</option>
                            <option value="39">Politician</option>
                            <option value="40">Psychologist</option>
                            <option value="41">Scientist</option>
                            <option value="42">Secretary</option>
                            <option value="43">Software_Developer</option>
                            <option value="44">Statistician</option>
                            <option value="45">Surgeon</option>
                            <option value="46">Surveyor</option>
                            <option value="47">Technical_writer</option>
                            <option value="48">Technician</option>
                            <option value="49">Technology_specialist</option>
                            <option value="50">Web_designer</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          Age
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control name="Age" type="number" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          Income
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control name="Income" type="number" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          Married or Single
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Select
                            aria-label="Default select example"
                            name="Married_Single"
                          >
                            <option>--Select one--</option>
                            <option value="0">Married</option>
                            <option value="1">Single</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          House Ownership
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Select
                            aria-label="Default select example"
                            name="House_Ownership"
                          >
                            <option>--Select one--</option>
                            <option value="0">No rent no own</option>
                            <option value="1">Owned</option>
                            <option value="2">Rented</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          Car Ownership
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Select
                            aria-label="Default select example"
                            name="Car_Ownership"
                          >
                            <option>--Select one--</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3}>
                          Experience
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control name="Experience" type="number" />
                        </Col>
                      </Form.Group>
                      <div style={{ marginTop: "5%", marginLeft: "65%" }}>
                        <div
                          class="btn-group mr-2"
                          role="group"
                          aria-label="Second group"
                        >
                          <button type="submit" class="btn btn-secondary">
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Card>
                  <h3
                    align="center"
                    style={
                      result === "Eligible"
                        ? { color: "green", margin: "8px" }
                        : { color: "Red", margin: "8px" }
                    }
                  >
                    {result} {result ? "for Loan" : ""}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
