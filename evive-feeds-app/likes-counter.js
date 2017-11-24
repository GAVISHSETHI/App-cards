import React from 'react';
import { Card, ListItem ,  Button , Icon } from 'react-native-elements';


class Likecount extends React.Component {
    constructor() {
        super();
        this.state = {val: 0 , backcolor: 'grey'}

    };

    update = (event) => {
        if(this.state.val === 1){
            this.reduce(event);
        }
        else if (this.state.val === 0)
        {
            this.increase(event);
        }
    };
    increase = (event) => {
        this.setState({val: this.state.val + 1 , backcolor: 'red'});
        // event.target.style.backgroundColor = 'red';
    };

    reduce = (event) => {
        this.setState({val: this.state.val - 1 , backcolor: ''});
        // event.target.style.backgroundColor = '';
    };
    render() {
        return (
            <Button

                // borderRadius='25'
                   backgroundColor= {this.state.backcolor}
                     icon={{name: 'heart', type: 'font-awesome' , color:''}}
                title={ this.state.val + this.props.likes + ' likes'} onPress={this.update}> </Button>
        );
    }
}

export default Likecount;
