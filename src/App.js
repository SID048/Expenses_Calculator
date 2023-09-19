import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// function App() {

// let expenseDate = new Date(2022, 7, 30);
// let expenseTitle = "School fee";
// let expenseAmount = 900;
// array of object
let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'school fee',
        amount: 250,
        date: new Date(2021, 7, 8),
    },
    {
        id: 'e2',
        title: 'food',
        amount: 250,
        date: new Date(2011, 7, 4),
    },
    {
        id: 'e3',
        title: 'books',
        amount: 20,
        date: new Date(2022, 5, 4),
    },
    {
        id: 'e4',
        title: 'rent',
        amount: 550,
        date: new Date(2011, 5, 4),
    }
];
const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses]
        setExpenses(updatedExpense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />

            <Expenses item={expenses} />
        </div>
    );
}

export default App;