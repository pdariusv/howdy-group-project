import React from "react";
import { Box,  styled } from "@material-ui/core";

const MyBox = styled(Box)({
  paddingLeft: 25
});

export default function StaticPage() {
  return (
    <MyBox>
    <div>
        This is a static page
    </div>
     </MyBox>    
  );
}
