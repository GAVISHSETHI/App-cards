
import React from 'react';
import { View, Text, Image , ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { Card, ListItem , Button , Icon } from 'react-native-elements';
import Feeds from './feeds';


class FeedsFull extends React.Component {
    render() {
        return (
            <ScrollView>
                <Image source={{uri: 'https://cgfrog.com/wp-content/uploads/2016/03/Todays-News-Post-Logo-Design-Inspiration.png'}} style={{height: 140 }} />
                <Feeds/>
            </ScrollView>

        );
    }
}

export default FeedsFull;
