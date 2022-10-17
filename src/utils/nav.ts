interface IMenu {
  name: string
  items: IItems[]
  index: number
}

interface IItems {
  name: string
  link: string
  index: string
  url: string
}

export const menu: IMenu[] = [
  {
    name: '使用方法',
    index: 1,
    items: [{ name: '使用方法', link: '', index: '1-1', url: '/' }],
  },
  {
    name: '咒文關鍵字',
    index: 2,
    items: [{ name: '關鍵字', link: '', index: '2-1', url: '/keyword' }],
  },
  {
    name: '魔咒模板',
    index: 3,
    items: [{ name: '魔咒', link: '', index: '3-1', url: '/template' }],
  },
]
