import './Expenses.css';

import { Card } from '../UI/Card';

import { ExpenseItem } from "./ExpenseItem";

export function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(exp => (<ExpenseItem date={exp.date} title={exp.title} amount={exp.amount} />))}
        </Card>
    )
}