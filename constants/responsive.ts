import { Dimensions } from "react-native";

function parsePercent(value: string | number): number {
  if (typeof value === "number") {
    return value;
  }

  return Number(value.replace("%", ""));
}

export function wp(value: string | number): number {
  const width = Dimensions.get("window").width;
  return (width * parsePercent(value)) / 100;
}

export function hp(value: string | number): number {
  const height = Dimensions.get("window").height;
  return (height * parsePercent(value)) / 100;
}