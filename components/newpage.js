import React from 'react';
import { Text,View,ImageBackground,StyleSheet,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const availableZipItems = [
    { place: 'JOB', code: '0874568326'}, 
    { place: 'PAO' , code: '0946853256'},
    { place: 'OAT', code: '0935841669'},
    { place: 'TANG', code: '0895476259'},
    { place: 'LAN', code: '0884571123'},
]
const ZipItem = ({ place, code, navigation }) => (
        <View >
            <Text style={styles.medium}>{place}</Text>
            <Text style={styles.medium}>{code}</Text>
        </View>
)
const _keyExtractor = item => item.code
export default function newpage({route}) {   
    const navigation = useNavigation() 
    return (
        <View>
            <ImageBackground source ={require('./free-abstract-background-vector.jpg')} style={styles.backdrop}>
            <FlatList
                          data={availableZipItems}
                           keyExtractor={_keyExtractor}
                          renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                     />
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
        fontSize: 60 ,
        color: 'white',
    }
});