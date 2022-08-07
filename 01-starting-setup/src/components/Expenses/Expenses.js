import { useState } from 'react';
import './Expenses.css';

import { Card } from '../UI/Card';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export function Expenses(props) {
    const [selectedFilterYear, setSelectedFilterYear] = useState('2021');

    const filterChangeHandler = year => {
        setSelectedFilterYear(year);
    };

    const filteredExpenses = props.expenses.filter(exp => new Date(exp.date).getFullYear().toString() === selectedFilterYear);
   
    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedFilterYear} onFilterChange={filterChangeHandler} />
                <ExpensesList expenses={filteredExpenses}/>
        </Card>

    )
}