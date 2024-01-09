import Header from "../../Components/Header";
import Payouts from "../../Components/Payouts";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <Payouts />
      </div>
    </div>
  );
}
