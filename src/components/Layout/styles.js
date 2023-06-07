import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";


export const Wrapper = styled.div`
    max-width: 1600px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    @media ${uiSize.bigTablet} {
        max-height: none;
    }

    @media ${uiSize.mobile} {
        min-height: 0;
        padding: 0 10px;
}
`

// export const Content = styled.div`
//     height: calc(100vh - 120px);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `