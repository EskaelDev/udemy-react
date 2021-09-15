import * as React from "react";
import { Expense } from "../../App";
import ExpenseItem from "../expense-item/expense-item";
import "./expense-list.scss";

export default class ExpenseList extends React.Component<{
  expenses: Expense[];
}> {
  render() {
    return (
      <div className="expenses">
        {this.props.expenses.map((e) => (
          <ExpenseItem expenses={e} />
        ))}
      </div>
    );
  }
}
