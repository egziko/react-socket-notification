import React from "react";
import {connection} from './component/socket'
import RenderEvent from "./component/RenderEvent";

import { RNContext } from "./component/WNTContext";



class WTNotifications extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.connection)
            connection.setConnection(this.props.connection)
    }

    render() {
        return (
        <React.Fragment>
            <RNContext.Consumer>
                {con => <RenderEvent {...this.props} connection={con} />}
            </RNContext.Consumer>
        </React.Fragment>
        )
    }

};

export default WTNotifications;