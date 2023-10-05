import styled from "styled-components"
import searchIcon from '../assets/search.svg'
import searchIconDark from '../assets/search-dark.svg'
import Select from 'react-select'
import close from '../assets/close.svg'
import closeDark from '../assets/close-dark.svg'
import React, { useContext } from "react"
import { ContextType, ThemeType } from "../types"
import { ThemeContext } from "../App"

interface IFilter {
  search: (val: string) => void
  select: (val: string) => void
}

type MyOptionType = {
  value: string
  label: string
}

const selectOptions = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]


// Styles
const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 45px;
  @media screen and (max-width: 700px) {
    display: block;
    margin: 0 0 30px;
  }
`
const Input = styled.input.attrs({ type: "search", "aria-label": "search" })<{ $theme: ThemeType }>`
  background-color: var(--color-header);
  background-image: url(${props => props.$theme === 'dark' ? searchIcon : searchIconDark});
  background-position: 24px center;
  background-size: 20px;
  background-repeat: no-repeat;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  color: var(--color-text);
  font-family: var(--ff);
  font-size: var(--fs);
  height: 54px;
  max-width: 480px;
  outline: none;
  padding: 10px 20px 10px 70px;
  width: 100%;
  -webkit-appearance: none;
  &::-webkit-search-cancel-button {
    background: url(${props => props.$theme === 'dark' ? close : closeDark}) center / 20px no-repeat;
    cursor: pointer;
    height: 24px;
    margin: 0 0 0 15px;
    width: 24px;
    -webkit-appearance: none;
  }
  @media screen and (max-width: 700px) {
    margin: 0 0 30px;
  }
`

const Filter: React.FC<IFilter> = ({ search, select }) => {
  const context = useContext<ContextType | null>(ThemeContext)

  return (
    <FilterBox>
      <Input
        placeholder="Search for a country"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => search(e.target.value)}
        $theme={context!.theme}
      />

      <Select
        options={selectOptions}
        placeholder="Filter by Region"
        onChange={(option: MyOptionType | null) => select(option?.value!)}
        isSearchable={false}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            background: 'var(--color-header)',
            border: 0,
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            fontFamily: 'var(--ff)',
            fontSize: 'var(--fs)',
            height: '54px',
            cursor: 'pointer',
            width: '198px'
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            color: 'var(--color-text)',
            height: '54px',
            padding: '10px 20px'
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'var(--color-text)'
          }),
          indicatorSeparator: () => ({}),
          indicatorsContainer: (base) => ({
            ...base,
            padding: '0 14px'
          }),
          dropdownIndicator: () => ({
            color: 'var(--color-text)'
          }),
          menu: (base) => ({
            ...base,
            background: 'var(--color-header)',
            border: 0,
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            padding: '10px 0'
          }),
          option: (base, state) => ({
            ...base,
            cursor: 'pointer',
            padding: '6px 20px',
            background: state.isSelected ? 'var(--color-selected)' : state.isFocused ? 'var(--color-selected)' : '',
            color: state.isSelected ? 'var(--color-text)' : state.isFocused ? 'var(--color-text)' : 'var(--color-text)',
            transition: 'var(--animate)'
          })
        }}
      />
    </FilterBox>
  )
}

export default Filter
