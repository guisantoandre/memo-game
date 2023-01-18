import styled from "styled-components";

type showProps = {
   show: boolean;
};
export const Button = styled.button<showProps>`
   width: 100%;
   display: grid;
   grid-template-columns: auto 1fr;
   background: var(--darkOrange);
   border: none;
   border-radius: 11px;
   cursor: pointer;
   transition: 0.15s ease;
   opacity: 1;
   margin-bottom: 1.5rem;
   pointer-events: ${(props) => (props.show ? "all" : "none")};
   opacity: ${(props) => (props.show ? "1" : ".5")};

   &:hover {
      opacity: 0.89;
   }
`;

export const IconArea = styled.span`
   background-color: var(--lightOrange);
   padding: 1.8rem;
   border-radius: 11px 0 0 11px;
`;

export const Icon = styled.img`
   width: 25px;
`;

export const Text = styled.p`
   color: #eee;
   font-family: var(--squad);
   font-size: 2.6rem;
   align-self: center;
`;
