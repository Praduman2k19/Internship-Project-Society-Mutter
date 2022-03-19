
import './App.css';
import Container from '@mui/material/Container';
import Nav from './component/Nav';
import Router from './Router';

function App() {
  return (
    <>
    <Nav />
      <Container maxWidth="xl" className='body' style={{background:'rgb(54, 53, 53)'}}>
      <Router />
      </Container>
    </>
  );
}

export default App;
