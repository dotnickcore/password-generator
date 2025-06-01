import Container from './ui/Container'
import Span from './ui/Span'
import Button from './ui/Button'

function Display() {
  return (
    <Container className="flex items-center justify-between bg-gray-100 p-3 rounded mb-6">
        <Span className="font-mono text-gray-800">mN1*07#Z!%XI</Span>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium" label="COPY"></Button>
    </Container>
  )
}

export default Display