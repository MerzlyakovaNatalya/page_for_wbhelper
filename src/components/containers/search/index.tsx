import { FC } from 'react'
import Search from '@/components/layout/search'
import { select_search } from '@/data'
import Img from '@/assets/images/search.png'

const SearchContainer: FC = () => {
    const menu = select_search[0]
  return (
    <>
    <Search
      title='Актуальные ставки'
      keyValue={menu.value}
      value={menu.title} 
      arrow={menu.arrow}
      options={select_search}
      placeholder='Поиск по названию или артикулу' 
      icon={Img}
      onClick={() => {}} 
      label='Найти'
      background='#FFDE31'
      color='#121212'
      widthButton='224px'
      />
    </>
  )
}

export default SearchContainer