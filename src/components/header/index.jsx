import styled from "styled-components"
import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "../../styles/adaptive"

const HeaderWrapper = styled.header`
  background-color: #fff;
  width: 100%;
  align-items: center;
  height: 70px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
`
const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const LogoutButton = styled.button`
  margin-left: 40px;
`

export const Header = forwardRef((props, ref) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/auth/login')
  }

  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <div>Logo</div>
        
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      </Content>
    </HeaderWrapper>
  )
})