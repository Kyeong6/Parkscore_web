import type { Score } from "../dtos/score";

export const scoreWeight =
  "You can adjust the weights of the indicators (access, acreage, investment, equity, amenities) using the arrows to see how they affect the ParkScore ranking of cities.";

export const scoreDescription: Record<keyof Score, string> = {
  access: "Score based on the population ratio of residents within 0.75km of the city park",
  acreage: "Score based on the average size of the city park and the ratio of the city park site",
  amentities: "Score based on the ratio of the city park budget of the local government for the past 3 years",
  equity: "Score based on the fairness of the city park in the city using the Gini coefficient",
  investment: "Score based on the total ratio of facilities in the city park",
};
