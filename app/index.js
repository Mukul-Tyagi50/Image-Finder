import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <ImageBackground 
    source={{uri:"https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg"}}
    style={styles.background}
   >
    <BlurView intensity={70} style={styles.blurContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>My Photo App</Text>
            <Text style={styles.subtitle}>Search for images of your choice BITCHES</Text>
            <Pressable style={styles.button}>
                <Link href="/search" style={styles.link}>Start searching</Link>
            </Pressable>
        </View>
    </BlurView>
    </ImageBackground>
  )
}

export default Welcome
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    blurContainer:{
        flex:1,
        width:'100%',
        // justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:50,
        color:'#ffff',
        marginTop:'50%',
        fontWeight:'500',
    },
    subtitle:{
        paddingLeft:16,
        marginTop:20,
        fontSize:15,
        color:'aqua'
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    ,
    button:{
        flex:1,
        backgroundColor:'#fff',
        height:2,
    },
})