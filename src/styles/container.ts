import styled from "styled-components";

export const Container = styled.div`
   max-width: 1100px;
   margin: auto;
   min-height: 100vh;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto 1fr auto;
   align-items: space-between;

   header {
      padding: 7rem 0;
      display: flex;
      justify-content: space-between;

      .toggleIcon img {
         cursor: pointer;
         width: 30px;
      }
   }

   main {
      display: grid;
      grid-template-columns: 250px 1fr;
      align-items: center;
      gap: 0 6rem;
      margin-top: -8rem;
   }

   footer {
      text-align: center;
      font-size: 1.8rem;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem 0;

      a {
         font-weight: 700;
         color: var(--darkOrange);

         img {
            width: 1.4rem;
         }
      }
   }

   @media (max-width: 1400px) {
      max-width: 70%;
   }

   @media (max-width: 1200px) {
      max-width: 85%;

      main {
         gap: 0 3rem;
      }
   }

   @media (max-width: 1050px) {
      main {
         grid-template-columns: 1fr;
      }
   }
`;

export const InfoArea = styled.section`
   @media (max-width: 1050px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      .infoContainer {
         display: flex;
         gap: 0 7rem;
      }

      .buttonContainer {
         width: 280px;
      }
   }
`;

export const Time = styled.div``;

export const Attempts = styled.div``;

export const CardArea = styled.section`
   justify-self: right;

   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 2rem;

   @media (max-width: 1050px) {
      justify-self: center;
      align-self: flex-start;
   }

   @media (max-width: 500px) {
      grid-template-columns: repeat(4, 1fr);
   }
`;
