import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.white};
  margin-top: 80px;
  position: relative;
  border: 1px solid ${colors.pink};
`
export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  padding: 8px;
`
export const TitleRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`
export const ContainerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.NavajoWhite};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`
export const Tag = styled.span`
  background-color: ${colors.pink};
  color: ${colors.NavajoWhite};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
`
