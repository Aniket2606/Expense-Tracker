import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { InnerLayout } from '../styles/Layouts';
import { rupee } from '../utils/Icons';
import Form from './Form';
import IncomeItem from './IncomeItem';


function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income:<span> {rupee} {totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
@media (max-width: 1100px){
   h1{
    text-align:center;
    font-size: 3.4rem;
   }

   .total-income{
    margin: 2rem 0 !important;
     height: 5rem;
     font-size: 2rem !important;
    span{
        font-size: 2rem !important;
    }
   }
  .form-container{
     margin: 0rem 3rem !important;
  }
  .income-content{
       flex-direction: column;
       .form-container{
        margin: 2rem 8rem;
       }
       .incomes{
        margin: 2rem 2rem;
       }

  }

}


    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

`;

export default Income