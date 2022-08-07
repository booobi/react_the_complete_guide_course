import Chart from "../Chart/Chart"


export const ExpensesChart = props => {
    const INIT_DATA_POINTS = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Otc', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }];


    const dataPoints = props.expenses.reduce((chartDatPoints, expense) => {
        const expenseMonthIdx = expense.date.getMonth();
        return [
            ...chartDatPoints.slice(0, expenseMonthIdx),
            { ...chartDatPoints[expenseMonthIdx], value: chartDatPoints[expenseMonthIdx].value + expense.amount },
            ...chartDatPoints.slice(expenseMonthIdx + 1)]
    }, INIT_DATA_POINTS)
    return <Chart dataPoints={dataPoints}/>
}