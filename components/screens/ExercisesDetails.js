import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Image,
    TextInput,
    FlatList 
} from "react-native";
import { COLORS, SIZES } from '../../app/Theme';
import { Feather } from '@expo/vector-icons';
//import { TextInput } from 'react-native-gesture-handler';

/* 
    QUEREMOS COLOCAR ALGO EM CIMA DAS LISTA DE EXERCICIOS GUIADOS
*/

// IMAGES DE EXERCISESDETAILS FORA DO PADRÃO

export default function ExerciseDetails({route}){
    const [exercise, setExercise] = useState(route.params.dados); //aqui está o erro (Não ta mais :) by Klebinho)

    //const [exercise, setExercise] = useState(0);

    return (
       <SafeAreaView style={styles.safeContainer}>
           <StatusBar
            backgroundColor={'#66bfbf'}
            barStyle={'dark-content'}
            animated={true}
           />
           <View style={styles.viewContainer}>
             <Image source={require('../../assets/images/BgPurple.png')}
             style={styles.imageBackground}
             />
               <Text style={styles.textContainer}>{exercise.title}</Text>
               <View style={styles.divisorView}></View>
               {/*<View style={styles.divisorLine}></View> */}
               <Text style={styles.textSubtitle}>{exercise.subTitle}</Text>
               <View style={styles.viewSearch}>
                 <Feather name="search" size={22} color="black" style={{marginHorizontal: 20}} />
                 <TextInput placeholder="Search" syle={{flex: 1}} />
               </View>

             <Image
              source={exercise.image}
              style={styles.imageExercise}
             />
           </View>

           <View>
              {/* <FlatList /> */}
              <Text style={styles.textTitle}>{exercise.title}</Text>
              <View style={styles.viewTitle}>
                  <Image source={exercise.image} style={styles.imageBlock} />
                  <View>
                      <Text>Básico I</Text>
                      <Text>Comece seu exercício agora !</Text>
                  </View>
              </View>

              <View style={styles.viewTitle}>
                  <Image source={exercise.image} style={styles.imageBlock} />
                  <View>
                      <Text>Básico II</Text>
                      <Text>Comece seu exercício agora !</Text>
                  </View>
              </View>
              
              <View style={styles.viewTitle}>
                  <Image source={exercise.image} style={styles.imageBlock} />
                  <View>
                      <Text>Básico III</Text>
                      <Text>Comece seu exercício agora !</Text>
                  </View>
              </View>
           </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        position: 'relative',
    },
    // style color box
    viewContainer: {
        width: '100%',
        height: 0.4 * SIZES.height,
        padding: 30,
        backgroundColor: '#66bfbf',
        position: 'relative',    
    },
    imageBackground: {
        position: 'absolute',
        top: 60,
        left: -30,
    },
    textContainer: {
        fontSize: 30,
        lineHeight: 45,
    },
    textSubtitle: {
        fontSize: 16,
        width: '85%',
    },
    imageContainer: {
        position: 'absolute',
        top: 60,
        left: -50,
    },
    divisorView: {
        marginTop: '10%',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*divisorLine: {
        width: '45%',
        height: 2,
        backgroundColor: '#EFEDED',
    }, */
    viewSearch:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '60%',
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        marginVertical: 30,
    },
    imageExercise: {
        position: 'absolute',
        bottom: 15,
        right: -150,
        width: 350,
        height: 260,
        resizeMode: 'contain',
    },
    textTitle:{
        marginVertical: 20,
        fontSize: 20,
        right: -20,
        borderRadius: 30,
    },
    viewTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.white,
        borderRadius: 25,
        padding: 15,
        shadowColor: '#9e9898',
        elevation: 5, // destaque
    },
    imageBlock: {
        width: 80,
        height: 60,
        resizeMode: 'center',
    },
});

/*
 <Image source={require('../../assets/images/BgPurple.png')}
               style={styles.imageContainer}
 />
*/