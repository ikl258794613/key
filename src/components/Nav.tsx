import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Button, Collapse } from '@chakra-ui/react'
import { menu } from '../utils/nav'
import { Link } from 'react-router-dom'

export default function Nav({
  mainIdx,
  subIdx,
}: {
  mainIdx: number
  subIdx: string
}): JSX.Element {
  const [activeIndex, setActiveIndex] = React.useState<number>(mainIdx)
  const [subIndex, setSubIndex] = React.useState<string>(subIdx)

  //-handle fc
  const handleActiveIndex = (index: number) => () => {
    index && setActiveIndex(index)
  }

  const handleSubIndex = (index: string) => () => {
    setSubIndex(index)
  }

  return (
    <div className='h-screen w-[12rem] overflow-y-hidden border-r'>
      <div className='border-b'>
        <div className='flex  h-[10rem] -w-[110.5rem] lex-col items-center justify-center '>
          <span className='text-3xl'>AI咒語魔導書</span>
        </div>
      </div>

      <div className='nav-container'>
        {menu.map((item) => {
          return (
            <React.Fragment key={item.index}>
              <Button
                className='nav-button-active'
                key={item.index}
                onClick={handleActiveIndex(item.index)}
              >
                <span className='ml-9 mr-14 w-[72px] text-lg font-normal'>
                  {item.name}
                </span>
                <span
                  className={
                    item.index === activeIndex
                      ? 'rotate-180 duration-200'
                      : 'duration-200'
                  }
                >
                  <FaChevronDown />
                </span>
              </Button>
              <Collapse in={item.index === activeIndex}>
                <ul>
                  {item.items.map((e) => {
                    return (
                      <li
                        key={e.index}
                        className='h-15 w-full'
                        onClick={handleSubIndex(e.index)}
                      >
                        <Link to={`${e.url}`}>
                          <span
                            role='button'
                            className={
                              e.index === subIndex && item.index === activeIndex
                                ? 'nav-item-wrapper active'
                                : 'nav-item-wrapper'
                            }
                          >
                            {e.name}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Collapse>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
