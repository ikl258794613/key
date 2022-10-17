import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@chakra-ui/react'
import { FaTrashAlt, FaCopy } from 'react-icons/fa'
import { useToast } from '@chakra-ui/react'
import KeywordCarde from '../components/Card/KeywordCard'

const KeywordCardArray = [
  { engName: 'spread arms', zhName: '伸出雙臂', id: 1, text: 'spread arms' },
  { engName: 'looking back', zhName: '回頭看', id: 2, text: 'looking back' },
  { engName: 'twintails,', zhName: '雙馬尾', id: 3, text: 'twintails' },
  { engName: 'ponytail', zhName: '馬尾', id: 4, text: 'ponytail' },
]

function Keyword() {
  const toast = useToast()
  const [InputText, setInputText] = React.useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      duration: 9000,
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
      duration: 9000,
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
          <div className='border-t-2 border-black'>
            <div className='mt-2 ml-4'>
              <div>
                <Button colorScheme='red' onClick={handleClear}>
                  <FaTrashAlt />
                </Button>
                <Button colorScheme='blue' onClick={handleCopy}>
                  <FaCopy />
                </Button>
              </div>
            </div>

            <input
              className='border-2 ml-4 w-[60%] border-black h-32 mt-10'
              type='text'
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
