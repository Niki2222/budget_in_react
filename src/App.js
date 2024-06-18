import React, { useState } from 'react';
import './App.css';



function Intro() {
    const [detailsOn, setDetailsOn] = useState(false);
    const [detailsText, setDetailsText] = useState('Details')
    const [addIncomeOn, setAddIncomeOn] = useState(false);
    const [addExpenseOn, setAddExpenseOn] = useState(false);


    function handleClickDetails() {
        setDetailsOn(!detailsOn);
        setDetailsText(detailsOn ? 'Details' :  'Hide details');
        setAddIncomeOn(false);
        setAddExpenseOn(false);
    }

    function handleClickAddIncome() {
        setAddIncomeOn(true);
        setAddExpenseOn(false);

    }

    function handleClickAddExpense() {
        setAddExpenseOn(true);
        setAddIncomeOn(false);
    }
    return(
        <div>
            <h1>Personal Budget</h1>
            <h2>Total balance</h2>
            <div>
                <h3>Bank balance: <span>0</span></h3>
                <h3>Wallet balance: <span>0</span></h3>
            </div>
            <button id={'details'} onClick={handleClickDetails}>{detailsText}</button>
            {detailsOn && 
                <div>
                    <button class='addIncome' onClick={handleClickAddIncome}>Add income</button>
                    <button class='addExpense'  onClick={handleClickAddExpense}>Add expense</button>
                </div>}
            {addIncomeOn && 
                <div>
                    <button class='addIncome'>to Bank</button>
                    <button class='addIncome'>to Wallet</button>
                </div>}
            {addExpenseOn && 
                <div>
                    <button class='addExpense'>from Bank</button>
                    <button class='addExpense'>from Wallet</button>
                </div>}
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <Intro />
    </div>
  );
}

export default App;
