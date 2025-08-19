import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Card from "../ui/card";
import { Typography } from "../ui/Typograhy";

export interface attributeType {
  name: string;
  logo: React.ComponentType;
}

const items: attributeType[] = [
  {
    name: "fast",
    logo: Fast,
  },
  {
    name: "food",
    logo: Food,
  },
  {
    name: "Choice",
    logo: Choice,
  },
  {
    name: "clock",
    logo: Clock,
  },
];

function Attribute() {
  return (
    <div className="my-20">
      <Typography variant="title" color="primary">Why Us?</Typography>
      <div className="flex w-full flex-row justify-center flex-wrap md:justify-start md:gap-5">
        {items.map((each) => (
          <h1><Card data={each} /></h1>
        ))}
      </div>
    </div>
  );
}

export default Attribute;
