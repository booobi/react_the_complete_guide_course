import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: 1,
            title: 'test1',
            date: new Date(2021, 2, 28),
            amount: 123
        }, {
            id: 2,
            title: 'test1',
            date: new Date(2021, 2, 28),
            amount: 123
        },
        {
            id: 3,
            title: 'test1',
            date: new Date(2021, 2, 28),
            amount: 123
        }
    ]
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        </div>
    );
}

export default App;

