import LoginCard from "../../components/LoginCard";
import { Coluna, Linha } from "./styled";

export default function LoginPage() {
  return (
    <Coluna>
      <Linha>
        <Coluna xs={12} sm={8} md={4}>
          <LoginCard/>
        </Coluna>
      </Linha>
    </Coluna>
  );
}
