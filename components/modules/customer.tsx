import Apple from "../icons/Apple";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Binance from "../icons/Binance";

interface customerType {
  name: string;
  logo: React.ComponentType;
}

const customerLogos: customerType[] = [
  { name: "Apple", logo: Apple },
  { name: "Tesla", logo: Tesla },
  { name: "Binance", logo: Binance },
];

function Customer() {
  return (
    <div className="flex flex-row gap-5 justify-between items-center flex-wrap ">
      {customerLogos.map((customerLogo) => (
        <div className="flex ">
          <customerLogo.logo />
        </div>
      ))}
    </div>
  );
}

export default Customer;
