import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";

export const Wrapper = styled.div`
  margin-top: 100px;
  
  @media ${uiSize.tablet} {
    margin: 100px auto 0 auto;
  }

  @media ${uiSize.mobileLandscape} {
    margin:30px 0 10px 0;
  }
`

export const MonthTitle = styled.h2`
  color: ${(props) => props.theme.headerText};
  font-size: 104px;
  font-weight: 500;
  font-family: "Sora", sans-serif;

  @media ${uiSize.tablet} {
    margin: 0 auto;
    padding: 50px 0 0 0;
  }

  @media ${uiSize.mobileLandscape} {
    font-size: 64px;
  }

  @media ${uiSize.mobile} {
    font-size: 56px;
  }

  @media (max-width: 280px) {
    font-size: 42px;
  }
`;
