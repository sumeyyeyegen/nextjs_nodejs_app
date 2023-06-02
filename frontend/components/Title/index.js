import React from 'react'
import {Text} from "@chakra-ui/react";


const Title = ({title}) => {
  return (
    <Text fontSize="3xl" pt={5}  pb={5}>
        {title}
    </Text>
  )
}

export default Title