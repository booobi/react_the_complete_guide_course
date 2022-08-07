import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseData = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }

    const toggleEditingOn = () => {
        setIsEditing(true);
    }
    const toggleEditingOff = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={toggleEditingOn}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={toggleEditingOff}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;