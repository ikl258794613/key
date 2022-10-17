import React from 'react'
import { Button, useToast } from '@chakra-ui/react'
import { FaCopy, FaPlusCircle } from 'react-icons/fa'

interface IProps {
  engName: string
  zhName: string
  text: string
  handleAddFc: (word: string) => void
}

export default function KeywordCard({
  engName,
  zhName,
  text,
  handleAddFc,
}: IProps) {
  const toast = useToast()

  const [Text, setText] = React.useState<string>(text)
  const handleCopy = () => {
    navigator.clipboard.writeText(Text)
    console.log('Text:', Text)
    toast({
      title: 'Copy Success.',
      description: 'Clear Success.',
      position: 'top',
      variant: 'solid',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  const handleAdd = () => {
    handleAddFc(Text)
  }
  return (
    <>
      <div className='min-w-[30px] drop-shadow-md h-32 p-4 m-4 border'>
        <div>{engName}</div>
        <div>{zhName}</div>
        <div className='flex justify-between'>
          <Button
            onClick={handleAdd}
            variant='outline'
            colorScheme='green'
            className='mr-2 mt-2'
          >
            <FaPlusCircle />
          </Button>
          <Button
            onClick={handleCopy}
            variant='outline'
            colorScheme='blue'
            className='mr-2 mt-2'
          >
            <FaCopy />
          </Button>
        </div>
      </div>
    </>
  )
}
