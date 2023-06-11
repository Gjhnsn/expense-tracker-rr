import React, { useState } from "react";
import { Backdrop } from "../DeleteModal/styles";
import ExpenseWrapper from "../ExpenseWrapper/ExpenseWrapper";
import Header from "../Header/Header";
import Month from "../Month/Month";
import { Wrapper } from "./styles";

const Layout = () => {
    const [deleteModal, setDeleteModal] = useState(false);

  return (
    <Wrapper>
      {deleteModal && window.innerWidth < "1024" && <Backdrop />}
      <Header />
        <Month />
        <ExpenseWrapper deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>
    </Wrapper>
  );
};

export default Layout;
