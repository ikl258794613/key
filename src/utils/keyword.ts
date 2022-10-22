interface IKeyword {
  engName: string
  zhName: string
  id: number
  text: string
  category: string
}

export const KeywordCardArray: IKeyword[] = [
  {
    engName: 'spread arms',
    zhName: '伸出雙臂',
    id: 1,
    text: 'spread arms',
    category: 'arms',
  },
  {
    engName: 'looking back',
    zhName: '回頭看',
    id: 2,
    text: 'looking back',
    category: 'head',
  },
  {
    engName: 'twintails,',
    zhName: '雙馬尾',
    id: 3,
    text: 'twintails',
    category: 'hair',
  },
  {
    engName: 'ponytail',
    zhName: '馬尾',
    id: 4,
    text: 'ponytail',
    category: 'hair',
  },
]
