import { FC } from 'react'
import { ISitiesList } from './cities_list.types'
import { StyledSitiesList } from './styles'
import Button from '@/components/ui/button'

const SitiesList: FC<ISitiesList> = ({listSities}) => {
  return (
    <StyledSitiesList>
      {listSities.map((item, index) => (
        <Button key={index} label={item}/>
      ))}
    </StyledSitiesList>
  )
}

export default SitiesList
