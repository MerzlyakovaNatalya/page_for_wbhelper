import { FC } from 'react'
import SitiesList from '@/components/layout/cities_list'
import Text from '@/components/ui/text'
import Categories from '@/components/layout/categories'
import Contentlayout from '@/components/layout/content'
import SideLayout from '@/components/chared/side-layout'
import { StyledWrapContent } from '@/components/layout/content/styles'
import BetList from '@/components/layout/bet_list'
import { useGetRatesQuery } from '@/store/rates/rates.api'

const Content: FC = () => {

  const {data, isLoading, error} = useGetRatesQuery({});
  const sities = [
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Новосибирск',
    'Екатеринбург',
    'Краснодар',
  ]
  const text =
    'Est ipsum gravida sit non. Mi ac habitasse proin sollicitudin malesuada blandit. Arcu turpis cursus imperdiet diam tincidunt augue ut. Metus proin vel consectetur ipsum quis amet faucibus mus. Placerat cras ac amet dictum. Massa sed cursus dapibus morbi turpis velit id mauris at.'
  return (
    <>
      <StyledWrapContent>
        <SideLayout side="space-between">
          <Contentlayout>
            <SitiesList listSities={sities} />
            <Text text={text} color="#777777" />
            {data && data.map((item: any, index: any) => (
              <div key={index}>{item}</div>
            ))}
            <BetList/>
          </Contentlayout>
          <Categories />
        </SideLayout>
      </StyledWrapContent>
    </>
  )
}

export default Content
