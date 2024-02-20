import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ 
      width: '20rem', 
      border: '1px solid #343a40', // Dark border color
      padding: '15px', // Add padding
      margin: '20px' // Add margin
    }} className='rounded-md flex flex-col gap-4'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1708022774121-4107be488ad8?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body className='flex flex-col gap-2'>
        <Card.Title className='text-[20px] font-bold'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='border p-4 hover:bg-[#cfe6fe] rounded-lg'>View Product</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;