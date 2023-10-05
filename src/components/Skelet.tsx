import styled from "styled-components"

export const SkeletLine = styled.div<{ $size?: number }>`
  background: rgba(0,0,0,0.3);
  border-radius: 10px;
  margin: 0 0 12px;
  height: ${props => props.$size ? props.$size : 16}px;
`

const Skelet = () => {
  return (
    <div>
      <SkeletLine $size={160}></SkeletLine>
      <SkeletLine $size={30}></SkeletLine>
      <SkeletLine></SkeletLine>
      <SkeletLine></SkeletLine>
      <SkeletLine></SkeletLine>
    </div>
  )
}

export default Skelet
