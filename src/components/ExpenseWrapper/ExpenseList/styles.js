import styled from "styled-components";
import { SlRefresh } from "react-icons/sl";
import { AiOutlineMinus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { motion } from "framer-motion";
import { uiSize } from "../../../utils/mobileScreens";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  padding: 25px;
  width: 48%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${uiSize.tablet} {
    width: 650px;
    min-height: none;
    order: 2;
  }

  @media ${uiSize.mobileLandscape} {
    width: 100%;
  }
`;

export const ScrollContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyExpenseDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 36px;
    color: ${(props) => props.theme.mutedColor};

    @media ${uiSize.tablet} {
      padding: 25px 0;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 5px;
  color: ${(props) => props.theme.mutedColor};
  border-bottom: 1px solid ${(props) => props.theme.body};

  @media ${uiSize.tablet} {
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
  }

  & :last-child {
    margin-left: auto;
  }
`;

export const GridLayout = styled.div`
  background-color: ${(props) =>
    props.currentExpense === props.expense &&
    props.deleteModal &&
    props.theme.warningOpacity};
  color: ${(props) => props.theme.headerText};
  border-radius: 4px;
  width: 100%;
  margin: 0;
  padding: 10px 10px 15px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 5px;
  border-bottom: 1px solid #585858;

  @media ${uiSize.tablet} {
    align-items: center;
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
    font-size: 16px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${uiSize.bigTablet} {
    max-width: 140px;
  }

  @media ${uiSize.mobileLandscape} {
    max-width: 100px;
  }

  @media ${uiSize.mobile} {
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RecurIcon = styled(SlRefresh)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;

  &:focus {
    outline: none;
  }
`;

export const NoDateIcon = styled(AiOutlineMinus)`
  color: ${(props) => props.theme.mutedColor};
  font-size: 16px;
`;

export const AmountP = styled.p`
  max-width: 95px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${uiSize.mobile} {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ActionIconBar = styled.div`
  margin-right: 5px;
  margin-left: auto;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;

  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  @media ${uiSize.tablet} {
    margin-right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  cursor: pointer;

  @media ${uiSize.tablet} {
    margin-left: 0;
  }

  &:hover {
    color: ${(props) => props.theme.warning};
    transition: color 0.2s ease;
  }
`;

export const EditIcon = styled(AiOutlineEdit)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.mutedColor};
    transition: color 0.2s ease;
  }
`;

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  text-align: right;
  color: ${(props) => props.theme.mutedColor};
  margin-top: auto;
  padding: 25px 10px 0 0;
  border-top: 1px solid ${(props) => props.theme.body};
`;

export const ConfirmBar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 45px;

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
