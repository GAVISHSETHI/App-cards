import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { Card, ListItem , Button , Icon } from 'react-native-elements';
import Feeds from './feeds';
import FriendsFeed from  './friends';
import FeedsFull from './feed-cards-full';
import FriendsFull from  './friends-full';



const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>{'home'} </Text>
    </View>
);

const FeedsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FeedsFull/>
    </View>
);

const Friends = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <FriendsFull/>
    </View>
);

const RootTabs = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Profile: {
        screen: FeedsScreen,
        navigationOptions: {
            tabBarLabel: 'Feeds',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-globe' : 'ios-globe-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },


    Newfeed: {
    screen: Friends,
    navigationOptions: {
    tabBarLabel: 'latest Feeds',
        tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-beer' : 'ios-beer-outline'}
            size={26}
            style={{ color: tintColor }}
        />
    ),
},
},


});

export default RootTabs;

