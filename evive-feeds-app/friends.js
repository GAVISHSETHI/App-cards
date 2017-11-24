
import React from 'react';
import { View, Text, Image , ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { Card, ListItem , Button , Icon, Tile } from 'react-native-elements';
import userData from './content';
import Likecount from './likes-counter';



class FriendsFeed extends React.Component {
    render() {

        return userData.map((user) => (
            <View>
                <Tile
                    imageSrc={{url: (user.url)}}
                    // imageSrc={user.url}
                    title={user.name}
                    // contentContainerStyle={{ }}
                >
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text> {user.Card_text_userspecific_content} </Text>
                    </View>
                    <Likecount likes={user.likes}/>
                </Tile>
            </View>
        ));
    }
}

export default FriendsFeed;
