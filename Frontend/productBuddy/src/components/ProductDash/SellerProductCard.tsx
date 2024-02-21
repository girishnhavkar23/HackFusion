import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function SellerProductCard({title,image,id}:{title:string,image:string,id:number}) {
  return (
    <Card style={{ 
      width: '20rem', 
      border: '1px solid #343a40', // Dark border color
      padding: '15px', // Add padding
      margin: '20px' // Add margin
    }} className='rounded-md flex flex-col gap-4'>
      <Card.Img variant="top" src={image} className='rounded-md max-w-[200px] max-h-[200px] object-cover '/>
      <Card.Body className='flex flex-col gap-2'>
        <Card.Title className='text-[20px] font-bold'>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <NavLink to={`/seller/product/${id}`} className='border p-4 hover:bg-[#cfe6fe] rounded-lg text-center'>
            <Button variant="primary" >View Product</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default SellerProductCard;