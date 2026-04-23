import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function App() {
  return (
    <Container className="py-4">
      <Card>
        <Card.Body>
          <Card.Title>Electron + React + Bootstrap</Card.Title>
          <Card.Text>
            Wenn du das siehst, läuft alles!!
          </Card.Text>
          <Button variant="primary">Knopf lebt</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
