
import React from 'react';
import { View, Text, Image , ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { Card, ListItem , Button , Icon } from 'react-native-elements';
import userData from './content';
import Likecount from './likes-counter';



class Feeds extends React.Component {
  render() {
    return userData.map((user) => (
      <View>

          <Card
              title={user.name}>

              <View>
                  <Image
                      style={{height: 250, width: 360 }}
                      resizeMode="cover"
                       source={{uri:user.url} }

                  />
                  <Text>
                      {user.Card_text_userspecific_content}
                  </Text>
              </View>
              <Likecount likes={user.likes}/>
          </Card>

      </View>
    ));
  }
}

export default Feeds;

