import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
    
    const [formData, setFormData] = useState({enteredTitle: '', enteredAmount: 0, enteredDate: '' });

    const titleChangeHandler = (event) => {
        setFormData(prevState => ({ ...prevState, enteredTitle: event.target.value }));
    }
    const amountChangeHandler = (event) => {
        setFormData(prevState => ({ ...prevState, enteredAmount: event.target.value }));
    }
    const dateChangeHandler = (event) => {
        setFormData(prevState => ({ ...prevState, enteredDate: event.target.value }));
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const parsedInput = {
            title: formData.enteredTitle,
            amount: +formData.enteredAmount,
            date: new Date(formData.enteredDate),
        }
        setFormData({enteredTitle: '', enteredAmount: 0, enteredDate: ''});
        props.onSaveExpenseData(parsedInput);
        props.onCancel();
    }

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={formData.enteredTitle} onChange={ titleChangeHandler } />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={formData.enteredAmount} onChange={ amountChangeHandler } />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-08-7" max="2022-12-31" value={formData.enteredDate} onChange={ dateChangeHandler } />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">add expense</button>
            <button type="button" onClick={props.onCancel}>cancel</button>
        </div>
    </form>)
};

export default ExpenseForm;