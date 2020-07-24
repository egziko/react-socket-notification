import React, { useEffect, useState } from "react";
import { connection } from "./socket";

class RenderEvent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.defaultActive = typeof props.alwaysActive !== "undefined";

        this.state = {
            active: false,
            message: ""
        }


        this.conn = props.connection.getConnection()

    }
    
    componentDidMount() {
        

        this.conn.on('connect', () => {
            this.conn.on(this.props.event, m => {
                if(typeof this.props.condition !== "undefined") {
                    if(typeof this.props.condition === "function") {
                        if(this.props.condition(m))
                            this.setState({active: true, message: m})

                    } else {
                        if(this.props.condition)
                            this.setState({active: true, message: m})
                    }
                } else {
                    this.setState({active: true, message: m})
                } 
            });
        })
    }

    render() {
        const {message, active} = this.state;

        if (!this.conn) return <React.Fragment></React.Fragment>;

        if(this.props.component)
            return this.props.component(message, active, () => this.setState({active: false}));
        
            

        return (
            <span onClick={() => this.setState({active: false})}>
                {active ? <p>{this.props.message}</p> : <React.Fragment></React.Fragment>}
            </span>
        )
    }

} 

export default RenderEvent;
