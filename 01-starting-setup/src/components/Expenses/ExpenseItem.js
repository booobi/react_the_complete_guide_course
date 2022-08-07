import { useState } from 'react';
import './ExpenseItem.css';

import { ExpenseDate } from './ExpenseDate';

import { Card } from '../UI/Card';

export function ExpenseItem (props) {
    console.log('redner');
    const [title, setTitle] = useState(props.title);

    const test = () => { console.log('test'); setTitle('asdasdasdas') };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

            <button onClick={test}>Change state</button>
        </Card>
    )
}
