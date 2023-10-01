import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ref, query, orderByChild, equalTo, onValue } from 'firebase/database';
import { db } from '../../firebase/config';

const backgroundImage = require('../../assets/bg.png');
const localImage = require('../../assets/mother.png');
const localImage2 = require('../../assets/girl.png');


const MedicalTips = ({ route, navigation }) => {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.row}>
                        <Image source={localImage} style={styles.imageStyle} />
                        <Text style={styles.name}>Medical Tips</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    contentContainer: {
      padding: 0,
    },
    name: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 70,
      marginLeft: 10,
      width: 260,
    },
    item: {
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      margin: 10,
      borderWidth: 2, // Add border width
      borderColor: '#5bf6db', // Add border color
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    imageStyle: {
      width: 80, // Adjust the width as needed
      height: 80, // Adjust the height as needed
      resizeMode: 'cover',
      marginLeft: 20,
      marginTop: 60,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 15,
    }, row2: {
      flexDirection: 'row',
    },
    text1: {
      fontSize: 17,
      fontWeight: '900',
      color: '#323232',
    },
    text2: {
      fontSize: 17,
      marginLeft: 20,
      marginRight: 25,
      color: '#323232',
    },
    buttonStyle: {
      backgroundColor: '#5bf6db',
      padding: 13,
      borderRadius: 5,
      height: 50,
      margin: 10,
    },
    buttonContainer: {
      marginBottom: 30,
    },
    buttonContainer2: {
      marginBottom: 20,
      width: 140,
      marginLeft: 0,
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    }, babyImage: {
      width: 40, // Adjust the width as needed
      height: 40, // Adjust the height as needed
      resizeMode: 'cover',
      marginLeft: 0,
      marginTop: 0,
    },
  });

export default MedicalTips;