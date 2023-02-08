import "./Main.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        Welcome to Wish List
      </header>
      <body className="Main-body">
        <Card style={{ width : '20rem', margin : '5vh 6vw 5vh 6vw'}}>
          <Card.Body>
            <Card.Title>
              박세준
            </Card.Title>
            <Card.Text>
              D-18
            </Card.Text>
            <Button variant="primary">
            펀딩
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width : '20rem', margin : '5vh 6vw 5vh 6vw'}}>
          <Card.Body>
            <Card.Title>
              안희윤
            </Card.Title>
            <Card.Text>
              D-95
            </Card.Text>
            <Button variant="primary">
            펀딩
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width : '20rem', margin : '5vh 6vw 5vh 6vw'}}>
          <Card.Body>
            <Card.Title>
              권다인
            </Card.Title>
            <Card.Text>
              D-215
            </Card.Text>
            <Button variant="primary">
            펀딩
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width : '20rem', margin : '5vh 6vw 5vh 6vw'}}>
          <Card.Body>
            <Card.Title>
              박형인
            </Card.Title>
            <Card.Text>
              D-306
            </Card.Text>
            <Button variant="primary">
            펀딩
            </Button>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
}

export default Main;