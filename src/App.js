import React, { useState, useEffect } from "react";
import _ from "underscore";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const ans = "ABCD";
  const [variables, setVariables] = useState("");
  const [countSubmit, setCountSubmit] = useState(1);
  const [text, setText] = useState("");
  const [name, setName] = useState("")
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // console.log(data);
  }, [data, text]);

  const handleSubmit = () => {
    setCountSubmit(countSubmit + 1);
    const regexp = /[ABCD]/gi;
    const matches_array = variables.match(regexp);
    const uniq = _.uniq(matches_array);
    //console.log(uniq)

    let posi = 0;
    for (var i = 0; i < variables.length; i++) {
      if (ans[i] === variables[i]) {
        posi++;
      }
    }

    setData([
      ...data,
      {
        secert: ans,
        text: variables,
        uniq: uniq.length,
        position: posi,
        count: countSubmit,
      },
    ]);

    if (ans === variables) {
      setShow(true);
    }
  };

  const handleName = () =>{
    const last = _.last(data).count
    setText(`ชื่อคุณ : ${name}  ทำการสุ่มทั้งหมด ${last}`)
  }

  return (
    <Container>
      <Card style={{ marginTop: "50px" }}>
        <Card.Header>Question 2 Coding</Card.Header>
        <Card.Body>
          <Card.Title>สุ่มคำตอบ 4 หลัก</Card.Title>
          <Card.Text>สุ่มตัวอักษร A-Z จำนวน 4 หลัก ให้ถูกต้อง</Card.Text>
          <Row className="align-items-center">
            <Col sm={1}>
              <Form.Group className="mb-1">
                <Form.Control
                  type="text"
                  maxLength="4"
                  onChange={(e) => setVariables(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button onClick={handleSubmit} variant="primary">
                สุ่มเลยนะจ๊ะ
              </Button>
            </Col>
          </Row>
          <Table style={{ marginTop: "10px" }} striped bordered hover>
            <thead>
              <tr>
                <th>คำตอบ</th>
                <th>สุ่ม</th>
                <th>ถูก/ทั้งหมด</th>
                <th>ถูก/ตำแหน่ง</th>
                <th>ครั้งที่</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((d) => {
                  return (
                    <tr key={d.count}>
                      <td>{d.secert}</td>
                      <td>{d.text}</td>
                      <td>{d.uniq}</td>
                      <td>{d.position}</td>
                      <td>{d.count}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
          {show === true ? (
            <Form.Group className="mb-3">
              <Form.Label>
                ยินดีด้วยคุณตอบถูก กรุณากรอกชื่อของคุณด้านล่าง
              </Form.Label>
              <Row className="align-items-center">
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    maxLength="50"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Button onClick={handleName} variant="success">
                    ลงชื่อ
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          ) : (
            <div></div>
          )}

          {text.length > 0 ? (<h3>{text}</h3>):(<div></div>)}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
