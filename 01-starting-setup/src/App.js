import { Expenses } from "./components/Expenses/Expenses";

function App() {
    const expenses = [
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
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;

