import { useEffect, useState } from "react"
import { getData } from "../api/fetch"
import { CountryType } from "../types"
import Item from "../components/Item"
import Filter from "../components/Filter"
import Skelet from "../components/Skelet"
import styled from "styled-components"
import Btn from "../components/Btn"

// styles
const Loadmore = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 70px;
`

const MainPage: React.FC = () => {
  const [list, setList] = useState<CountryType[]>([])
  const [load, setLoad] = useState<boolean>(true)
  const [copyList, setCopyList] = useState<CountryType[]>([])
  const [search, setSearch] = useState<string>('')
  const [select, setSelect] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(8)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData<CountryType[] | any>('https://restcountries.com/v3.1/all')
      if (!data.message) {
        setList(data)
        setCopyList(data)
        setLoad(false)
      }
    }
    fetchData()
  }, [])

  // Search
  useEffect(() => {
    const searchedList = copyList.filter(el => {
      const searchMatch = el.name.common.toLowerCase().includes(search.toLowerCase())
      const selectMatch = el.region.toLowerCase().includes(select.toLowerCase())
      if ((searchMatch) && (selectMatch)) {
        return el
      }
    })
    setList(searchedList)
  }, [search, select])

  return (
    <div>
      <Filter search={setSearch} select={setSelect} />

      <div className="grid grid-4">
        {list.map(el => <Item key={el.name.common} el={el} />).slice(0,currentPage)}
        {load && Array(8).fill(8).map((el, index) => <Skelet key={index} />)}
      </div>

      {list.length > 0 && <Loadmore>
        <Btn btn name="Loadmore" handler={() => setCurrentPage(prev => prev += 8)} />
      </Loadmore>}

      {!list.length && <div className="error">There are no countries matching your filter parameters. Try to change your parameters.</div>}
    </div>
  )
}

export default MainPage
