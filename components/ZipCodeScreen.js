import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,ImageBackground,StyleSheet,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View >
            <Text style={styles.medium}>{place}</Text>
            <Text style={styles.medium}>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source ={require('./jo3o3l.jpg')} style={styles.backdrop}>
                <Button
                 title="Press me"
                 color="#f194ff"
                 onPress={() => navigation.navigate('newpage')}
                />
                      <FlatList
                          data={availableZipItems}
                           keyExtractor={_keyExtractor}
                          renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                     />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );


    
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    cover: {
        backgroundColor: 'black',
        width: '100%',
        height: 250,
        opacity: 0.4,
        alignItems: 'center',
    },
    medium: {
        marginTop: 15,
        fontSize: 35 ,
        color: 'white',
    }
});