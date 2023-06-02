import {useToast} from "@chakra-ui/react"
import {Wrap,WrapItem,Button} from '@chakra-ui/react'

function Toast({type,message}) {
  const toast = useToast()

  toast({
    title: `${message}`,
    position: "top-right", 
    status:type,
    isClosable: true,
  })
}

export default Toast