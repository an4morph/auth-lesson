import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../styles/adaptive';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  width: 100%;

  ${media.lg`
    width: 600px;
  `}
`

const Button = styled.button`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  border-radius: 25px;
  width: 100%;
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
`

const LinkUnder = styled(Link)`
  font-size: 16px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Form = ({ children, onSubmit, title, btnText = 'Save', linkUnder }) => {
  return (
    <FormContainer>
      {title && <Title>{title}</Title>}
      {children}
      <Button onClick={onSubmit}>{btnText}</Button>
      {linkUnder && (
        <LinkUnder to={linkUnder.path}>{linkUnder.text}</LinkUnder>
      )}
    </FormContainer>
  )
}
