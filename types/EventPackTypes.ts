export type PackColor =
  | "gray"
  | "gold"
  | "amber"
  | "blue"
  | "teal"
  | "ruby"
  | "bronze"
  | "brown"
  | "yellow"
  | "orange"
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo";

export interface EventPack {
  title: string;
  slug: string;
  price: string;
  benefits: string[];
  color?: PackColor;
}