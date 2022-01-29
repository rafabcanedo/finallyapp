/////////// HOME SCREEN ///////////

import React from "react";
import { View, Image, Text, SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native";
import {COLORS} from "../../app/Theme";
import { SIZES } from "../../app/Theme";
import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

// import dados
import dados from '../../assets/dados';

// PRECISO DE UMA ARTE DO LOGO TRANSPARENTE PARA A TELA HOME(COLOCAR NO FUNDO)
// COLOR SEARCH BAR?
export default function ExercisesScreen({navigation, user}) {

    const ExerciseItem = ({dados}) => {
        return (
        <TouchableOpacity
          onPress={() => navigation.navigate('ExercisesDetails', {dados: dados})}
          activeOpacity={0.8}
          style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image 
         source={dados.image}
         style={{
             width: '100%',
             resizeMode: 'cover',
             flex: 1,
         }}
        />
        <Text style={styles.titleCategory}>{dados.title}</Text>
        </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.areaView}>
            <StatusBar
             backgroundColor={COLORS.accent}
             barStyle="dark-content"
             animated={true}
            />
            <View style={styles.viewBase}>
                <Image source={require('../../assets/images/BgPurple.png')} 
                style={styles.imageBackground}
                />
             <View style={styles.viewContent}>
              <View style={styles.viewPonts}>
                <View style={styles.viewList}></View>
                <View style={styles.viewList2}></View>
              </View>
             </View>
             <Text style={styles.textBase}>
                 {`Bom dia ${user.name ? user.name : 'Rafael Canedo'}!`}
                 {/* if (user.name) {
                     return user.name
                 } else {
                     return "Rafael Canedo"
                 } */}
             </Text>
             <View style={styles.searchBar}>
             <Feather name="search" size={22} color="black" style={{marginHorizontal: 20}} />
           
           <TextInput placeholder="Search" syle={{flex: 1}} />

            </View>
            </View>

            <FlatList
             data={dados}
             style={{
                 paddingHorizontal: 20,
                 marginTop: -30,
             }}
             contentContainerStyle={{
                 flex: 1,
                 alignItems: 'center',
             }}
             showsVerticalScrollIndicator={false}
             numColumns={2}
             keyExtractor={item => item.title}
             renderItem={({item}) => <ExerciseItem dados={item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    areaView:{
        flex: 1,
        position: 'relative',
    },
    viewBase:{
        width: '100%',
        height: 0.45 * SIZES.height,
        padding: 30,
        backgroundColor: COLORS.accent,
        position: 'relative'
    },
    imageBackground: {
        position: 'absolute',
        top: 60,
        left: -30,
    },
    viewContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewPonts:{
        width: 60,
        height: 60,
        backgroundColor: COLORS.accent + '45',
        marginRight: 0,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewList:{
        height: 3,
        backgroundColor: COLORS.white,
        width: '40%',
        marginBottom: 8,
        marginLeft: -5,
    },
    viewList2:{
        height: 3,
        backgroundColor: COLORS.white,
        width: '40%',
        marginLeft: -5,
    },
    textBase:{
        fontSize: 30,
        lineHeight: 45,
        fontFamily: 'sans-serif-medium',
    },
    searchBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        marginVertical: 40,
    },
    titleCategory:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto',
    },
});

/*
<Image
source={require('../assets/images/fundologo.png)}
style={{
    position: 'absolute',
    top: 60,
    left: -50,
}}
/>
 */