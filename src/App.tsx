import axios from 'axios';
import {useState} from 'react'
import {Container, Row, Col, Button, Spinner} from 'react-bootstrap'
import { Input } from './components/Input';
import {ResultAnimation} from './components/ResultAnimation';
import './styles/custom.scss'

type Results = {
  percentage: string,
  result: string,
  fname: string,
  sname: string
};
function App() {
  const [myName, setMyName] = useState<string>('');
  const [partner, setPartner] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Results>();

  async function handleClickButton(){
    setIsLoading(true)
    const {data} = await axios.get('https://love-calculator.p.rapidapi.com/getPercentage',{
      params: {fname: myName, sname: partner},
      headers: {
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': '0b6a307ee8mshd27fece5fb8a1abp1e205fjsnd270b7cd8730'
      }
    }
    );
    setIsLoading(false)
    setResult(data)
  }
  return (
    <Container>
      <Row>
        <Col className='py-5'><h1 className='Logo'>Couple Percentage</h1></Col>
      </Row>
      <Row className='gap-sm-0 gap-4'>
        <Col sm={6}><Input label='Seu nome:' value={myName} setValue={setMyName}/></Col>
        <Col sm={6}><Input label='Nome do seu par:' value={partner} setValue={setPartner} /></Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center py-5'>
        {isLoading ? (
          <Spinner animation="border" role="status" variant='pink-dark'>
          <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Button className='btn btn-pink-dark text-white rounded-pill' onClick={handleClickButton}>Combinar</Button>
        )}
          </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center py-2'><ResultAnimation loading={isLoading} result={result}/></Col>
      </Row>
    </Container>
  );
}

export default App;
