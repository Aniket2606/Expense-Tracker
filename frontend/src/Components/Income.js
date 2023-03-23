import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { InnerLayout } from '../styles/Layouts';
import Form from './Form';

export default function Income() {

 const {addIncome} = useGlobalContext();

  return (
    <IncomeStyled>
      <InnerLayout>
          <h1>Incomes</h1>
          <div className="income-content"></div>
          <div className="form-container">
            <Form/>
          </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`


`;