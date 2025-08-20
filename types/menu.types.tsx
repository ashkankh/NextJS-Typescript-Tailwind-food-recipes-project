export interface detailsType {
  0: { Cuisine: string };
  1: { "Recepie type": string };
  2: { Difficulty: string };
  3: { "Preparation Time": string };
  4: { "Cooking Time": string };
  5: { Serves: string };
}

export interface menuType {
  id: "string";
  name: "string";
  price: number;
  discount: number;
  introduction: string;
  ingredients: string[];
  details: detailsType;
  recepie: string[];
}
