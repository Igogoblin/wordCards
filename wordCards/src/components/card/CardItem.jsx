import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardItem = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">I know</Button>{" "}
        <Button variant="danger">I don't know</Button>{" "}
      </Card.Body>
    </Card>
  );
};

export default CardItem;
