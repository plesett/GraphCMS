import { CSSProperties } from "react";

export interface ICenterProps {
    width?: number | string;
    children: any;
    bg?: string;
}

export interface IFlexRowProps {
    children: any;
    bg?: string;
    width?:string;
    marginLeft?:number;
    justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "flex-end";
}