import { useState } from 'react';
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const defaultExpenses = [
    {
        id: 1,
        title: 'test1',
        date: new Date(2021, 2, 5),
        amount: 123
    }, {
        id: 2,
        title: 'test2',
        date: new Date(2021, 2, 6),
        amount: 123
    },
    {
        id: 3,
        title: 'test3',
        date: new Date(2021, 2, 7),
        amount: 123
    }
]

function App() {
    const [expenses, setExpenses] = useState(defaultExpenses);
    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => [...prevExpenses, expense]);
    }
    
    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;

