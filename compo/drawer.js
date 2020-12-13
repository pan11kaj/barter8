import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase'
export default class Drawer extends Component{
    render(){
        return(
            <View style={styles.container}>
          <DrawerItems
          {...this.props}/>


          <TouchableOpacity style={styles.buton} onPress={()=>{
              this.props.navigation.navigate('login')
              
          }}>
              <Text>
            Logout
              </Text>
          </TouchableOpacity>
            </View>
        )
    }
    }
 const styles = StyleSheet.create({
     container:{flex:1,marginTop:20},buton:{width:60,backgroundColor:'yellow',marginTop:400,borderRadius:20,alignItems:'center'}
    
 })
