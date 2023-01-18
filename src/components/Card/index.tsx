import { items } from "../../data/items";
import { CardType } from "../../types/CardType";
import * as C from "./styles";

type CardProps = {
   data: CardType;
   clickCard: () => void;
};
export const Card = ({ data, clickCard }: CardProps) => {
   return (
      <C.Container
         onClick={clickCard}
         background={data.permanentShown || data.shown}
      >
         {data.permanentShown === false && data.shown === false && (
            <C.Text>?</C.Text>
         )}
         {(data.permanentShown || data.shown) && data.item !== null && (
            <C.Icon src={items[data.item].icon} alt={items[data.item].name} />
         )}
      </C.Container>
   );
};
