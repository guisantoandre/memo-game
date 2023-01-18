import * as C from "./styles";

type Props = {
   text: string;
   icon: any;
   clickButton: React.MouseEventHandler<HTMLButtonElement>;
   showButton: boolean;
};

export const Button = ({ text, icon, clickButton, showButton }: Props) => {
   return (
      <C.Button onClick={clickButton} show={showButton}>
         {icon && (
            <C.IconArea>
               <C.Icon src={icon} />
            </C.IconArea>
         )}
         <C.Text>{text}</C.Text>
      </C.Button>
   );
};
