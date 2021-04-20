import Card from "react-bootstrap/Card";

function Cards() {
    return (
        <Card className="ml-auto mr-auto mb-3 text-dark" border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/120" />
            <Card.Header>Lorem ipsum</Card.Header>
            <Card.Body>
                <Card.Title>Lorem ipsum dolor
                </Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, cum commodi quas nostrum velit voluptas.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards;