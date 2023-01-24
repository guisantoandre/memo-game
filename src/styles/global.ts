import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
      --sofia: "Sofia Sans", sans-serif;
      --squad: "Squada One", cursive;
      --background: ${(props) => props.theme.colors.background};
      --mainText: ${(props) => props.theme.colors.mainText};
      --subtitle: ${(props) => props.theme.colors.subtitle};
      --border: ${(props) => props.theme.colors.border};
      --darkOrange: #f44823;
      --lightOrange: #f66040;

      font-size: 62.5%;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body,
   html {
      background: var(--background);
      font-family: var(--sofia);
      color: var(--mainText);
      min-height: 100vh;
      transition: background .5s ease;
   }

   a {
      text-decoration: none;
   }

   ul {
      list-style-type: none;
   }

   @media (max-width: 1050px) {
      :root {
         font-size: 49%;
      }
   }
`;
