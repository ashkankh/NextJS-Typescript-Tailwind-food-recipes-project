import Apple from "../icons/apple_temp";
import Tesla from "../icons/tesla_temp";
import Binance from "../icons/binance_temp";

interface customerType {
  id: number;
  name: string;
  logo: React.ComponentType;
}

const customerLogos: customerType[] = [
  { id: 1, name: "Apple", logo: Apple },
  { id: 2, name: "Tesla", logo: Tesla },
  { id: 3, name: "Binance", logo: Binance },
];

function Customer() {
  return (
    <div className="flex flex-row gap-5 justify-between items-center flex-wrap ">
      {customerLogos.map((customerLogo) => (
        <div key={customerLogo.id} className="flex ">
          <customerLogo.logo />
        </div>
      ))}
    </div>
  );
}

export default Customer;
