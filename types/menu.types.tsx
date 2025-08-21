export interface detailsType {
  filter(arg0: (detail: any) => any): unknown;
  0: { Cuisine: string };
  1: { "Recipe Type": string };
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
  recipe: string[];
}
