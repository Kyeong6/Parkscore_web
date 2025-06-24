import * as xlsx from "xlsx";
import { ScoreWithCity, type Score } from "../dtos/score";

interface ParkScoreBuffer {
  blob: ArrayBuffer | string;
}

type ParkScore = {
  city: string;
  "access": number;
  "acreage": number;
  "investment": number;
  "equity": number;
  "amenities": number;
  "total": number;
  "rank": number;
};

export function parkScoreParser({ blob }: ParkScoreBuffer) {
  const data = xlsx.read(blob);
  return xlsx.utils
    .sheet_to_json<ParkScore>(data.Sheets[data.SheetNames[0]])
    .map(
      (pasredScore) =>
        new ScoreWithCity({
          city: pasredScore.city,
          score: {
            access: Math.round(pasredScore["access"]),
            acreage: Math.round(pasredScore["acreage"]),
            amentities: Math.round(pasredScore["investment"]),
            equity: Math.round(pasredScore["equity"]),
            investment: Math.round(pasredScore["amenities"]),
          },
        })
    );
}
