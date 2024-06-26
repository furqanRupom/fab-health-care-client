import { USER_ROLE } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IMetaData {
    page:number;
    limit:number;
    total:number
}

export type IUserRole  = keyof typeof USER_ROLE;

export interface IDrawerItem {
    title:string;
    path:string;
    parentPath?:string;
    icon?:OverridableComponent<SvgIconTypeMap<{},"svg">> & {muiName:string};
    child?:IDrawerItem[];
}

export const Gender = ["MALE","FEMALE"]