import Nav from './Nav'

interface IProps {
  children?: React.ReactNode
  mainIndex: number
  subIndex: string
}

export default function Layout({ children, mainIndex, subIndex }: IProps) {
  return (
    <>
      <div className='layout'>
        <Nav mainIdx={mainIndex} subIdx={subIndex} />
        <main className='h-screen w-full'>{children}</main>
      </div>
    </>
  )
}
