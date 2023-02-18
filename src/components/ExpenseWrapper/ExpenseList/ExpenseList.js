import React from "react";
import { useSelector } from "react-redux";
import {
  ActionIconBar,
  AmountP,
  Container,
  DeleteIcon,
  EditIcon,
  Footer,
  GridLayout,
  Header,
  Name,
  NameWrapper,
  NoDateIcon,
  RecurIcon,
  ScrollContainer,
  EmptyExpenseDiv
} from "./styles";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { Tooltip } from 'react-tooltip'

const ExpenseList = ({
  setIsEdit,
  setOpenExpenseForm,
  setCurrentExpense,
  setExpenseName,
  setRecurringPayment,
  setDateChosen,
  setExpenseAmount,
  setErrorMessage,
  currentExpense,
  setDeleteModal,
  deleteModal,
  setExpenseListUpdated
}) => {

  const expenseData = useSelector((state) => state.expense.allExpenses);

  const date = new Date();
  const currMonth = date.getMonth() + 1;

  const onEdit = (expense) => {
    setOpenExpenseForm(true);
    setIsEdit(true);
    setErrorMessage(false);
    setCurrentExpense(expense);
    setExpenseName(expense.name);
    setDateChosen(expense.dueDate);
    setExpenseAmount(expense.amount);
    setRecurringPayment(expense.recurring);
  };

  const handleOpenDeleteModal = (expense) => {
    setDeleteModal((prev) => !prev);
    setCurrentExpense(expense);
    setOpenExpenseForm(false);
  };

  const expenses = [...expenseData]
    .sort((a, b) => (a.dueDate === "n/a" ? -1 : a.dueDate - b.dueDate))
    .map((expense) => {
      return (
        <li order={expense.amount} key={expense.id}>
          <GridLayout
            currentExpense={currentExpense}
            expense={expense}
            deleteModal={deleteModal}
          >
            <NameWrapper>
              <Name>{expense.name}</Name>
              {expense.recurring === true && (
                <>
                  <RecurIcon data-tooltip-id="recur-tooltip" data-tooltip-content="Expense Is Recurring" />
                  <Tooltip id="recur-tooltip"
                    backgroundColor="rgba(52, 52, 52, .8)"
                    clickable={false}
                    disable={window.innerWidth < "450" && true}
                  />
                </>
              )}
            </NameWrapper>
            <p>
              {expense.dueDate.length < 1 || expense.dueDate.length > 2 ? (
                <NoDateIcon />
              ) : (
                currMonth + "/" + expense.dueDate
              )}
            </p>
            <AmountP>${Number(expense.amount).toFixed(2)}</AmountP>
            <ActionIconBar>
              <EditIcon onClick={() => onEdit(expense)} />
              <DeleteIcon onClick={() => handleOpenDeleteModal(expense)} />
            </ActionIconBar>
          </GridLayout>
          <DeleteModal
            id={expense.id}
            setOpenExpenseForm={setOpenExpenseForm}
            currentExpense={currentExpense}
            expense={expense}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            setExpenseListUpdated={setExpenseListUpdated}
          />
        </li>
      );
    });

  // ------ convert expense amount to numbers and add total of array
  const totalOfExpenses = () => {
    if (expenseData.length) {
      const expenseAmountList = expenseData.map(
        (expense) => expense.amount
      );
      const convertedAmountList = expenseAmountList?.map((price) =>
        Number(price)
      );
      const expenseTotal = convertedAmountList?.reduce((accumulator, value) => {
        return accumulator + value;
      });
      return expenseTotal.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
    }
  };

  return (
    <>
      <Container>
        <Header>
          <p>Name</p>
          <p>Due</p>
          <p>Amount</p>
          {window.innerWidth > "450" ? <p>Action</p> : <p></p>}
        </Header>
        <ScrollContainer>{expenses.length ? <ul>{expenses}</ul> : <EmptyExpenseDiv><p>No Expenses</p></EmptyExpenseDiv>}
          
        </ScrollContainer>
        <Footer>
          {expenseData.length ? (
            <p>Total: ${totalOfExpenses()}</p>
          ) : (
            <p>$0.00</p>
          )}
        </Footer>
      </Container>
    </>
  );
};

export default ExpenseList;
