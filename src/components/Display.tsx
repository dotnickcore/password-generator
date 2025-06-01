import Container from './ui/Container';
import Span from './ui/Span';
import Button from './ui/Button';
import { usePasswordGeneratorContext } from '../hooks/usePasswordGeneratorContext';

function Display() {
  const { generatedPassword } = usePasswordGeneratorContext();

  return (
    <Container className="flex items-center justify-between bg-gray-100 p-3 rounded mb-6">
      <Span
        className="font-mono text-gray-800 whitespace-nowrap overflow-x-auto scrollbar-hide"
        style={{ maxWidth: 'calc(100% - 80px)' }}
      >
        {generatedPassword || <Span className="text-gray-400">Generate a password...</Span>}
      </Span>
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium"
        label="COPY"
        onClick={() => {
          navigator.clipboard.writeText(generatedPassword);
        }}
      ></Button>
    </Container>
  );
}

export default Display;
