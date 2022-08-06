import { ExpenseItem } from "./ExpenseItem";

export function Expenses(props) {
    return (
        <div>
            {props.expenses.map(exp => (<ExpenseItem date={exp.date} title={exp.title} amount={exp.amount} />))}
        </div>
    )
}