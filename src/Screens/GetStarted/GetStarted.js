import React from 'react'
import { Image, StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import GetStarted_Img from '../../public/images/illustrator/GetStarted.png'
import { fonts } from '../../public/fonts'
import Button from '../../Components/Button'
import Gap from '../../Components/Gap'

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={GetStarted_Img} style={styles.Image} />
      <View style={styles.content_Started}>
        <Text style={styles.text_Content}>T9adya twselk tal bab dark</Text>
      </View>
      <Gap height={25} />
      <Button text_btn="Get-Started" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#fff",
    paddingVertical: 30
  },
  Image: {
    width: 300,
    height: 300,
    alignSelf:'center'
  },
  content_Started:{
    width: '100%',
    paddingHorizontal:40,
    paddingVertical:60,
  },
  text_Content:{
    fontSize: 35,
    fontFamily: fonts.ExtraBold,
    textAlign:'center',
    color: '#8BC34A'
  },
  btn_started: {
    backgroundColor: "#8BC34A",
    color: '#000'
  }
})