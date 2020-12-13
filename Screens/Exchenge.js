import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import firebase from 'firebase'
import db from '../config'
export default class ExchengeItem extends React.Component{
   constructor(){
       super();
       this.state={
           itemName:'',userId:firebase.auth().currentUser.email,des:''
       }
   } 
   createUniqueId(){
    return Math.random().toString(36).substring(7)
}
   addItems=(i,c)=>{
       var id = this.createUniqueId()
       if(i !== '' && c !== ''){
        db.collection("Users").add({
            'UserId':this.state.userId,
            'Item':i,
            'Des':c,
            'request_id':id
        }) 
        this.setState({itemName:'',des:''})
        return ToastAndroid.show('Congratulation! your Item has requested',ToastAndroid.LONG)
       
       }else{
        return Alert.alert('Please Fill all the Information')
       }
    
   }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:28,backgroundColor:'blue',color:'white',marginTop:-20}}>Add Your Own Item</Text></View>
               <TextInput
                style={styles.input}
                placeholder="Item Name"
                onChangeText={text=>{this.setState({itemName:text})}}
                value={this.state.itemName}
               />  
               <TextInput
               style={{width:200,height:160,borderWidth:3,borderColor:'red',marginTop:10}}
               placeholder="description"
               numberOfLines={8}
               onChangeText={text=>{this.setState({des:text})}}
               value={this.state.des}
               />
               <TouchableOpacity style={styles.buton} onPress={()=>{
                   this.addItems(this.state.itemName,this.state.des)}}>
                       <Text style={{textAlign:'center',color:'#ffff',fontSize:24}}>Submit</Text>
                       </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   input:{
       width:200,height:30,borderWidth:3,borderColor:'red'
   } ,buton:{width:200,backgroundColor:'blue',borderRadius:20,marginTop:20,height:40}
})