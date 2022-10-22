import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@chakra-ui/react'
import { FaTrashAlt, FaCopy } from 'react-icons/fa'
import { useToast } from '@chakra-ui/react'
import KeywordCarde from '../components/Card/KeywordCard'
import { KeywordCardArray } from '../utils/keyword'

function Keyword() {
  const toast = useToast()
  const [InputText, setInputText] = React.useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value
    setInputText(inputValue)
  }
  const handleClear = () => {
    setInputText('')
    toast({
      title: 'Clear.',
      description: 'Clear Success.',
      position: 'top',
      variant: 'solid',
      status: 'success',
      duration: 300,
      isClosable: true,
    })
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(InputText)
    toast({
      title: 'Copy Success.',
      description: 'Clear Success.',
      position: 'top',
      variant: 'solid',
      status: 'success',
      duration: 300,
      isClosable: true,
    })
  }

  const handleAddWord = (word: string) => {
    const textword = InputText + word + ','
    setInputText(textword)
  }

  return (
    <>
      <Layout mainIndex={2} subIndex={'2-1'}>
        <div className=''>
          <div className='flex justify-between'>
            {KeywordCardArray.map((item) => {
              return (
                <KeywordCarde
                  engName={item.engName}
                  zhName={item.zhName}
                  key={item.id}
                  text={item.text}
                  handleAddFc={handleAddWord}
                />
              )
            })}
          </div>
          <div>
            <div className='mt-2 ml-4'>
              <div>
                <Button
                  colorScheme='red'
                  onClick={handleClear}
                  className='mr-2'
                >
                  <FaTrashAlt />
                </Button>
                <Button
                  colorScheme='blue'
                  onClick={handleCopy}
                  className='mr-2'
                >
                  <FaCopy />
                </Button>
              </div>
            </div>

            <textarea
              className='border-2 ml-4 w-[60%] h-32 mt-10'
              value={InputText}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Keyword
