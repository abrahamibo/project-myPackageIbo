import React, {Component} from "react";
import Button from "../Button";
import {
    getDate,
    getFullYear,
    getTime
} from '../../helper/date'
import {testApiGet} from "../../service/apiAxio.service";

class MyReactAppClass extends Component {

    constructor (props) {
        super(props);

        this.openFilters = this.openFilters.bind(this);
        this.closeFilters = this.closeFilters.bind(this);

        this.state = {
            dataRequest:null,
            show:-1
        }
    }

    componentDidMount() {
        const reqData = testApiGet('/api/test')
            .then((rep) =>{
            console.log(rep,"compDidMont");
            this.setState({
                dataRequest:rep
            })
        })
            .catch((err) => {
                console.log(err,"compDidMont");
                this.setState({
                    dataRequest:err
                })
            });

    }

    closeFilters() {
        this.setState({show: false});

        let self = this;
        let timer = setTimeout(function(){
            self.setState({show: -1});
            clearTimeout(timer);
        }, 300);
    }

    openFilters() {
        this.setState({show: true});
    }

    render () {
        let { show, dataRequest } = this.state;
        console.log(dataRequest, 'render');
        const {width, height, bgColor, content, color} = this.props;
        return (<div
            style={{
                width: width || 200,
                height: height || 200,
                backgroundColor: bgColor || "green",
                color: color || "black"
            }}
        >
            {content}
            {getDate()}
            {getFullYear()}
            {getTime()}
            <Button/>
        </div>);
    }
}

export default MyReactAppClass;
