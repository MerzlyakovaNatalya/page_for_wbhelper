import { FC } from 'react'
import { AdminNavigation } from './admin_navigation.types'
import { StyledAdminNavigation } from './styles'
import Image from 'next/image'
import Img from '../../../../assets/images/img_profile.png'
import Bell from '@/assets/components_svg/bell'
import Select from '@/components/ui/select'

const AdminNavigation: FC<AdminNavigation> = ({ menu }) => {
  return (
    <StyledAdminNavigation>
      {menu.map((item) => {
        return (
          <Select
            key={item.value}
            value={item.title}
            arrow={item.arrow}
            options={[
              { value: item.value, title: item.title, arrow: item.arrow },
            ]}
          />
        )
      })}
      <Bell/>
      <Image src={Img} alt="Picture profile" />
    </StyledAdminNavigation>
  )
}

export default AdminNavigation
