import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { rupee } from '../utils/Icons';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            
            <h2>Recent History</h2>
           
            {history.map((item) =>{
                let {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
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

    h2{
        font-size: 1.6rem;
        margin: 0 auto !important;
    }
    p{
       font-size: 1rem;
       }
    }
     
}

    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History