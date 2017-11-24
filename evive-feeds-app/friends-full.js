
import React from 'react';
import { View, Text, Image , ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { Card, ListItem , Button , Icon } from 'react-native-elements';
import FriendsFeed from './friends';


class FriendsFull extends React.Component {
    render() {
        return (
            <ScrollView>
                <FriendsFeed/>
            </ScrollView>

        );
    }
}

export default FriendsFull;
