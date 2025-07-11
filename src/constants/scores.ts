import type { Score, ScoreWithCity } from "../dtos/score";

export const MAX_LIST_ROW = 20;

export const scoreNames: Record<keyof Score, string> = {
  access: "Access",
  acreage: "Acreage",
  amentities: "Amenities",
  equity: "Equity",
  investment: "Investment",
};

export const defaultScores: Array<ScoreWithCity> = [
  {
    city: "Seoul",
    score: {
      access: 100,
      acreage: 100,
      amentities: 100,
      equity: 100,
      investment: 100,
    },
  },
  {
    city: "Busan",
    score: {
      access: 95,
      acreage: 95,
      amentities: 95,
      equity: 95,
      investment: 95,
    },
  },
  {
    city: "Daegu",
    score: {
      access: 90,
      acreage: 90,
      amentities: 90,
      equity: 90,
      investment: 90,
    },
  },
  {
    city: "Incheon",
    score: {
      access: 85,
      acreage: 85,
      amentities: 85,
      equity: 85,
      investment: 85,
    },
  },
  {
    city: "Gwangju",
    score: {
      access: 80,
      acreage: 80,
      amentities: 80,
      equity: 80,
      investment: 80,
    },
  },
  {
    city: "Daejeon",
    score: {
      access: 75,
      acreage: 75,
      amentities: 75,
      equity: 75,
      investment: 75,
    },
  },
  {
    city: "Ulsan",
    score: {
      access: 60,
      acreage: 60,
      amentities: 60,
      equity: 60,
      investment: 60,
    },
  },
];
