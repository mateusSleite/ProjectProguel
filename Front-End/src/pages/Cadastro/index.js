import CadastroCard from "../../components/CadastroCard";
import { Coluna, Linha } from "./styled";

export default function CadastroPage() {
  return (
    <Coluna>
      <Linha>
        <Coluna xs={12} sm={8} md={4}>
            <CadastroCard/>
        </Coluna>
      </Linha>
    </Coluna>
  );
}
