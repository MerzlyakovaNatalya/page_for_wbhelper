import { FC } from 'react'
import { INavBar } from './nav_bar.types'
import { StyledNavBar, StyledWrapSelect } from './styles'
import Select from '@/components/ui/select'

const NavBar: FC<INavBar> = ({ menu }) => {
  return (
    <StyledNavBar>
      {menu.map((item) => {
        return (
          <StyledWrapSelect key={item.value}>
            <Select
              value={item.title}
              arrow={item.arrow}
              options={[
                { value: item.value, title: item.title, arrow: item.arrow },
              ]}
            />
          </StyledWrapSelect>
        )
      })}
    </StyledNavBar>
  )
}

export default NavBar
