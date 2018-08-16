/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from "react";
import "./index.less";


export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            divWidth: document.body.clientHeight

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>111111</div>
        );
    }
}