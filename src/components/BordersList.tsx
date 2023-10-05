import { useEffect, useState } from "react"
import { getData } from "../api/fetch"
import { BorderType, CountryType } from "../types"
import styled from "styled-components"
import Btn from "./Btn"

interface IBordersList {
  param: string
}

// Styles
const Borders = styled.div`
  display: block;
`
const BordersTitle = styled.div`
  display: block;
  font-size: var(--fs2);
  line-height: 30px;
  font-weight: 600;
  margin: 0 0 15px;
`
const Empty = styled.div`
  display: inline-block;
  line-height: 32px;
`

const BordersList: React.FC<IBordersList> = ({ param }) => {
  const [list, setList] = useState<BorderType[]>([])

  useEffect(() => {
    if (!!param) {
      const fetchData = async () => {
        const data = await getData<CountryType[]>(`https://restcountries.com/v3.1/alpha?codes=${param}`)
        const borders: BorderType[] = data.map(el => { 
          return { name: el.name.common, link: el.cca3.toLowerCase() }
        })
        setList(borders)
      }
      fetchData()
    }
  }, [param])

  return (
    <Borders>
      <BordersTitle>Border countries:</BordersTitle>
      {list.map(el => <Btn key={el.link} url={`/${el.link}`} name={el.name} />)}
      {!list.length && <Empty>There are not border countries</Empty>}
    </Borders>
  )
}

export default BordersList
