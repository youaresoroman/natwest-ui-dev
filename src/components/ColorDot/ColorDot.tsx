import React, { FC } from "react";
import { nameToColor } from "@/utils/nameToColor";
import styles from "./ColorDot.module.scss";

export const ColorDot: FC<{ color: string }> = ({ color }) => {
  const backgroundColor = nameToColor(color);
  return <div className={styles.ColorDot} style={{ backgroundColor }} />;
};
