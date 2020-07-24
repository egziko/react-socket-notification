import React from "react";
import { RNContext } from "./WNTContext";

const withNotifications = WComponent => props => (
    <RNContext.Consumer>
        {connection => (
            <WComponent {...props} connection={connection} >
        </WComponent>
        )}
    </RNContext.Consumer>
)

export default withNotifications