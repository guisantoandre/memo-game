import styled from "styled-components";

type ContainerProps = {
   background: boolean;
};
export const Container = styled.div<ContainerProps>`
   display: grid;
   place-items: center;
   background: ${(props) => (props.background ? "#2586E1" : "#e9e9e9")};
   height: 110px;
   width: 110px;
   border: ${(props) =>
      props.background ? "none" : "2px dashed var(--border)"};
   border-radius: 11px;
   cursor: pointer;

   @media (max-width: 1050px) {
      height: 80px;
      width: 80px;
   }

   @media (max-width: 450px) {
      height: 65px;
      width: 65px;
   }
`;

export const Text = styled.p`
   font-size: 6.4rem;
   font-family: var(--squad);
   color: #ccc;
`;

export const Icon = styled.img`
   width: 65px;

   @media (max-width: 1050px) {
      width: 50px;
   }

   @media (max-width: 450px) {
      width: 40px;
   }
`;
