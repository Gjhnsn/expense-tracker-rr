import React from "react";
import { MonthTitle, Wrapper } from "./styles";

const Month = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <Wrapper>
      <MonthTitle>{currentMonth.toUpperCase()}</MonthTitle>
    </Wrapper>
  );
};

export default Month;
