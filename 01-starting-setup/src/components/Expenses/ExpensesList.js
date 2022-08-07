import './ExpensesList.css';
import { ExpenseItem } from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return <ul className="expenses-list">
        {props.expenses.map(exp => (<li><ExpenseItem key={exp.id} date={exp.date} title={exp.title} amount={exp.amount} /></li>))}
    </ul>;
}

export default ExpensesList;