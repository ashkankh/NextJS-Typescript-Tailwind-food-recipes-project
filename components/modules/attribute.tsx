import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Card from "../ui/card";
import { Typography } from "../ui/Typograhy";

export interface attributeType {
  id: number;
  name: string;
  logo: React.ComponentType;
}

const items: attributeType[] = [
  {
    id: 1,
    name: "fast",
    logo: Fast,
  },
  {
    id: 2,
    name: "food",
    logo: Food,
  },
  {
    id: 3,
    name: "Choice",
    logo: Choice,
  },
  {
    id: 4,
    name: "clock",
    logo: Clock,
  },
];

function Attribute() {
  return (
    <div className="my-20">
      <Typography variant="title" color="primary">
        Why Us?
      </Typography>
      <div className="flex w-full flex-row justify-center flex-wrap md:justify-start md:gap-5">
        {items.map((each) => (
            <Card key={each.id} data={each} />
        ))}
      </div>
    </div>
  );
}

export default Attribute;
