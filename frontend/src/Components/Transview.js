import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { dateFormat } from '../utils/dateFormat';
import { rupee } from '../utils/Icons';


function Transview() {
    const {transview} = useGlobalContext()

    const [...history] = transview()

    return (
        <HistoryStyled>
            <h1>All Transactions</h1>
            {history.map((item) =>{
                let {_id, title, amount, date, type} = item
                return (
                    <div key={_id} className="history-item">

                        <p className='date'>
                        {dateFormat(date)}
                        </p>


                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}> 

                            <b>{ type === 'expense' ? `-` : `+` } </b>
                            {rupee} 
                            {amount}
                        </p>

                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    @media (max-width: 1100px){
        gap: 2rem;
        h1{
            font-size: 3rem;
            text-align: center;
        }
       .history-item{
        p{
            font-size: 1.1rem;
        }
       }


    }

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    .history-item{
        background: #FCF6F9;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .date{
        
    }
`;

export default Transview