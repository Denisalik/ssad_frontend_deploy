import React from "react";
import {Grid} from "@mui/material";
import SideNav from "../Layout/SideNav";

interface QuestionnaireHocProps {
    underline: number
}

const QuestionnaireHoc: React.FC<QuestionnaireHocProps> = ({underline, children}) => {
    return (
        <Grid container direction="row">
            <Grid item xs={4}>
                <SideNav underline={underline}/>
            </Grid>
            <Grid item xs={8}>
                {children}
            </Grid>
        </Grid>
    );
};

export default QuestionnaireHoc;