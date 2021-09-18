import * as React from 'react';
import { Expense } from '../../App';
import './expense-item.scss';
import ExpenseDate from '../expense-date/expense-date';
import Card from '../card/card';

export default class ExpenseItem extends React.Component<{
  expenses: Expense;
}> {
  public readonly expenseDate = new Date(2011, 2, 23);
  public readonly expenseTitle = 'Car Insurance';
  public readonly expenseAmount = 648.15;

  render() {
    return (
      <Card className="expense-item">
        <ExpenseDate date={this.props.expenses.date} />
        <div className="expense-item__description">
          <h2>{this.props.expenses.title}</h2>
          <div className="expense-item__price">
            {this.props.expenses.amount}$
          </div>
        </div>
      </Card>
    );
  }
}
