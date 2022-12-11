import React, { FC } from "react";
import styles from "./ColorDot.module.scss";

export const ColorDot: FC<{ color: string }> = ({ color }) => {
    return (
        <div className={styles.ColorDot} style={{ backgroundColor: color}}/>
    )
}