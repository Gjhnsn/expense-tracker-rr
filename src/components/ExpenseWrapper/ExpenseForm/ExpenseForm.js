import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

import { addExpense } from "../../../redux/expenseSlice";
import { editExpense } from "../../../redux/expenseSlice";
import { useDispatch } from "react-redux";
import {
  Container,
  FormContainer,
  FormHeader,
  NoOption,
  RecurBox,
  SubmitButton,
  YesOption,
  customSelectStyles,
  AmountWrapper,
  Footer,
  ErrorMsg,
  CurrName,
  CloseButton,
  OpenButton,
} from "./styles";

const ExpenseForm = ({
  openExpenseForm,
  setOpenExpenseForm,
  isEdit,
  currentExpense,
  setIsEdit,
  expenseName,
  setExpenseName,
  recurringPayment,
  setRecurringPayment,
  dateChosen,
  setDateChosen,
  expenseAmount,
  setExpenseAmount,
  errorMessage,
  setErrorMessage,
  setDeleteModal,
}) => {
  const dispatch = useDispatch();

  const options = ["n/a"];

  const daysInMonth = () => {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  };

  for (let i = 1; i <= daysInMonth(); i++) {
    options.push(i);
  }

  const dueDateOptions = options.map((date) => ({ value: date, label: date }));

  // ------------------------------ Validation

  const preventNegative = (e) => {
    var key = e.key;
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      e.preventDefault();
    }
  };

  function naturalRound(e) {
    let dec = e.target.value.indexOf(".");
    let tooLong = e.target.value.length > dec + 3;
    // let invalidNum = isNaN(parseFloat(e.target.value));

    if (dec >= 0 && tooLong) {
      e.target.value = e.target.value.slice(0, -1);
    }
  }

  const handleDateChange = (date) => {
    setDateChosen(date.value.toString());
  };

  const closeAndClearForm = () => {
    setOpenExpenseForm(false);
    setExpenseName("");
    setDateChosen("");
    setExpenseAmount("");
    setRecurringPayment(null);
    setIsEdit(false);
    setErrorMessage(false);
  };

  const validateExpense = () => {
    if (
      expenseName.trim() === "" ||
      expenseAmount === "" ||
      isNaN(expenseAmount) ||
      parseFloat(expenseAmount) <= 0
    ) {
      setErrorMessage(true);
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validateExpense()) {
      setErrorMessage(false);
      if (isEdit) {
        dispatch(
          editExpense({
            id: currentExpense.id,
            name: expenseName,
            dueDate: dateChosen,
            recurring: recurringPayment,
            amount: expenseAmount,
          })
        );
      } else {
        dispatch(
          addExpense({
            name: expenseName,
            dueDate: dateChosen,
            recurring: recurringPayment,
            amount: expenseAmount,
            id: uuidv4(),
          })
        );
      }
      closeAndClearForm();
    }
  };

  const renderErrorMessage = () => {
    return (
      <ErrorMsg>
        <p>Please enter an expense name and amount</p>
      </ErrorMsg>
    );
  };

  return (
    <>
      <Container openExpenseForm={openExpenseForm}>
        {!openExpenseForm && (
          <OpenButton
            onClick={() => [setOpenExpenseForm(true), setDeleteModal(false)]}
            type="button"
            aria-label="Open expense form"
          >
            <BsPlusSquare style={{height: "30px", width: "30px"}} aria-hidden="true" />
          </OpenButton>
        )}
        {openExpenseForm && (
          <FormContainer>
            <FormHeader>
              {isEdit ? (
                <>
                  <h3>Edit Expense</h3>
                  <CurrName>{currentExpense.name}</CurrName>
                </>
              ) : (
                <h3>Add New Expense</h3>
              )}
              <button
                onClick={closeAndClearForm}
                type="button"
                aria-label="close expense form"
              >
                <CloseButton style={{height: "30px", width: "30px"}} aria-hidden="true" />
              </button>
            </FormHeader>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              key={isEdit ? currentExpense.name : 1}
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />

            <label>Due Date</label>

            <Select
              options={dueDateOptions}
              styles={customSelectStyles}
              maxMenuHeight={200}
              key={isEdit && currentExpense.dueDate}
              value={{ label: dateChosen, value: dateChosen }}
              onChange={handleDateChange}
            />

            <label>Amount</label>
            <AmountWrapper>
              <span>$</span>
              <input
                type="number"
                name="amount"
                step="0.01"
                min="0.01"
                onKeyPress={preventNegative}
                key={isEdit && currentExpense.amount}
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                onInput={(e) => naturalRound(e)}
              />
            </AmountWrapper>
            <label>Recurring Payment?</label>
            <RecurBox>
              <button type="button" onClick={() => setRecurringPayment(false)}>
                <NoOption
                  currentExpense={currentExpense && currentExpense}
                  isEdit={isEdit}
                  recurringPayment={recurringPayment}
                >
                  <p>No</p>
                </NoOption>
              </button>
              <button type="button" onClick={() => setRecurringPayment(true)}>
                <YesOption
                  type="button"
                  currentExpense={currentExpense && currentExpense}
                  isEdit={isEdit}
                  recurringPayment={recurringPayment}
                >
                  <p>Yes</p>
                </YesOption>
              </button>
            </RecurBox>
            <Footer>
              {errorMessage && renderErrorMessage()}
              <SubmitButton onClick={onSubmit} type="button">
                <p>Submit</p>
              </SubmitButton>
            </Footer>
          </FormContainer>
        )}
      </Container>
    </>
  );
};

export default ExpenseForm;
