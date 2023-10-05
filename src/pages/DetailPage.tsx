import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CountryType } from "../types"
import { getData } from "../api/fetch"
import BordersList from "../components/BordersList"
import styled from "styled-components"
import Btn from "../components/Btn"
import { SkeletLine } from "../components/Skelet"


// Styles
const BackSection = styled.div`
  display: flex;
  margin: 0 0 45px;
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
`
const ImgSection = styled.div`
  img { display: block; }
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
`
const DetailList = styled.ul`
  column-count: 2;
  column-gap: 30;
  margin: 0 0 70px;
  padding: 0;
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
  @media screen and (max-width: 700px) {
    column-count: auto;
    column-gap: auto;
  }
`
const DetailItem = styled.li`
  display-inline: block;
  list-style: none;
  margin: 0 0 10px;
  width: 100%;
  b { font-weight: 600; margin-right: 8px; }
`


const DetailPage: React.FC = () => {
  const { slug } = useParams()
  const [country, setCountry] = useState<CountryType | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData<CountryType[]>(`https://restcountries.com/v3.1/alpha/${slug}`)
      setCountry(data[0])
    }
    fetchData()
  }, [slug])
  
  if (!country) return <>
    <SkeletLine $size={50} style={{ width: '100px', marginBottom: '30px' }} />
    <div className="grid grid-2">
      <SkeletLine $size={300} />
      <div>
        <SkeletLine $size={30} />
        <SkeletLine />
        <SkeletLine />
        <SkeletLine />
        <SkeletLine />
      </div>
    </div>
  </>

  // Objects
  const nativeNames = Object.values(country.name.nativeName).map(el => el.official).join(', ')
  const currencies = Object.values(country.currencies).map(el => el.name).join(', ')
  const languages = Object.values(country.languages).map(el => el).join(', ')

  return (
    <div>
      <BackSection>
        <Btn url="/" name="Back" size="large" back />
      </BackSection>
      <div className="grid grid-2">
        <ImgSection>
          <img src={country.flags.svg} alt="" />
        </ImgSection>
        <div>
          <h1>{country.name.common}</h1>
          
          <DetailList>
            <DetailItem><b>Native Name:</b> {nativeNames}</DetailItem>
            <DetailItem><b>Population:</b> {country.population}</DetailItem>
            <DetailItem><b>Region:</b> {country.region}</DetailItem>
            <DetailItem><b>Sub Region:</b> {country.subregion}</DetailItem>
            <DetailItem><b>Capital:</b> {country.capital}</DetailItem>
            <DetailItem><b>Top Level Domain:</b> {country.tld.join(', ')}</DetailItem>
            <DetailItem><b>Currencies:</b> {currencies}</DetailItem>
            <DetailItem><b>Languages:</b> {languages}</DetailItem>
          </DetailList>

          <BordersList param={country.borders && country.borders.join(',')} />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
