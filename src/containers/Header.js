import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { resetAccountAction } from 'actions/accounts'

const HeaderWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  justify-content: center;
  padding: 0px 16px;
  margin: 0px auto;
`

const HeaderTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.25px;
  color: #343a40;
  position: relative;
  overflow: hidden;
  text-align: left;
  padding: 0 6px;
  line-height: 60px;
  margin-bottom: 0px;
  cursor: pointer;
`

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(resetAccountAction())
    history.push('/')
  }

  return (
    <HeaderWrapper>
      <HeaderTitle onClick={handleOnClick}>RETAIL APP</HeaderTitle>
    </HeaderWrapper>
  )
}

export default Header
