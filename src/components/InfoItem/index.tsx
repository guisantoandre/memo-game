import * as C from "./styles";

type Props = {
   title: string;
   info: string;
};

export const InfoItem = ({ title, info }: Props) => {
   return (
      <C.InfoWrapper>
         <C.TitleArea>{title}</C.TitleArea>
         <C.InfoArea>{info}</C.InfoArea>
      </C.InfoWrapper>
   );
};
