import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function About() {
    return(
        <div>
            <Container>
    <Card border="info" >
        <Card.Header className="blockquote mb-0 card-body">About Me</Card.Header>
        <Card.Body>
            <Card.Text>
                I am Learning programming and enjoying figuring new things out!
            </Card.Text>
            <Card.Text>
                Currently living in Madison, Wisconsin
            </Card.Text>
        </Card.Body>
    </Card>
</Container>
        </div>
    )
}