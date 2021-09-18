import * as React from 'react';
import { Expense } from '../../App';
import Card from '../card/card';
import ExpenseItem from '../expense-item/expense-item';
import './expense-list.scss';

export default class ExpenseList extends React.Component<{
  expenses: Expense[];
}> {
  render() {
    return (
      <Card className="expenses">
        {this.props.expenses.map((e) => (
          <ExpenseItem expenses={e} />
        ))}
      </Card>
    );
  }
}
