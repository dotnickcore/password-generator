import Container from './components/ui/Container';
import Heading from './components/ui/Heading';

function App() {
  return (
    <>
      <Container className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
        <Container className='bg-white rounded-lg shadow-md p-6 w-full max-w-md'>
          <Heading level={1} className='text-2xl font-bold text-gray-800 mb-6 text-center'>Password Generator</Heading>
        </Container>
      </Container>
      
    </>
  );
}

export default App;
