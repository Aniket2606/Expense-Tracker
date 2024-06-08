import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import History from '../History/History';
import { InnerLayout } from '../styles/Layouts';
import { rupee } from '../utils/Icons';
import Chart from './Chart';


function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1> Dashboard</h1>
                <div className="stats-con">
                    <div className="chart-con">

                        <div className="graph">
                            <Chart />
                        </div>
                        {/* div for maintaining chart size with grid */}
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance bal">
                                <h1>Total Balance</h1>
                                <p>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="history-con">
                        {/* Transaction history */}
                        <History />

                        <h2 className="salary-title" >Min <span>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {rupee}{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {rupee}{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {rupee}{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {rupee}{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    @media (max-width: 1100px){
    h1{
        color: white;
        text-align: center;
        font-size: 3rem;
    }
     }

    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        @media (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr) ;
        padding: 0rem 1.5rem;
        .chart-con{
            
            .graph{
                padding: 1rem 1.5rem;
                
            }

            .amount-con{
               .income, .expense{
                   text-align: center;
                   margin: 0 1.5rem !important;
                h2{
                    font-size: 25rem;
                    text-align: center;
                }}

                .balance{
                    margin-top: 1rem;
                    height: 95% !important;

                    @media (max-width: 700px){
                        p{
                            font-size: 4.1rem !important;
                        }
                    }
            }
        }
      }
    }

        .chart-con{
            grid-column: 1 / 4;
            height: 400px;

            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0.5rem 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income{
                background-color: rgb(60,118,220);
                }
                .expense{
                background-color: rgb(220,53,69);
                }

                .income, .expense, .balance{
                    height : 100%;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    padding: 1rem;
                    color: white;
                } 

                .balance{
                    background-color: rgb(33, 170, 36);
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                 .bal{
                    margin-top: 5%;
                 }
            }
        }

        .history-con{

            @media (max-width: 1100px){
             grid-column: 1/4;
             margin-top: 36rem;

            .salary-title{
                margin-top: 5rem !important;
            }
            .salary-item {
             
            
            }

            }


            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                color: black;
                
                
            }
            .salary-item{
                background: #FCF6F9;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    color: rgba(34, 34, 96, .6) 
                }
            }
        }
    }
`;

export default Dashboard