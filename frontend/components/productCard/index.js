import React, {useEffect} from 'react'
import Styles from './styles.module.css'
import { addToCart } from "../../redux/action/cart";
import { connect, useDispatch, useSelector } from "react-redux";
import { Text, Card, CardHeader,CardBody,Stack,Box,Heading, StackDivider, CardFooter, ButtonGroup, Button, Image } from "@chakra-ui/react";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.items);

  return (
    <Box w="100%">
      <Card maxW='sm'>
      <CardBody>
        <Image
          src={`http://localhost:3000/${product?.image?.src}`}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Living room Sofa</Heading>
        <Text>
          
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          $450
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue' onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
</Box>
  )
}
export default ProductCard;