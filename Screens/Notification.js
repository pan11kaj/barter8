import React, { Component } from 'react';
import {View,Text, Image} from 'react-native';
import MyHeader from '../compo/MyHeader';
import firebase from 'firebase';
import db from '../config'
import { Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
export default class Notifications extends Component{
constructor(){
    super();
    this.state={
        userid:firebase.auth().currentUser.email,allNotifications:[]
    }
    this.requestref=null
}
getN=()=>{
   this.requestref = db.collection('all_notification').where('noti_status','==',"unRead").where('target_user_id','==',this.state.userid)
   .onSnapshot((snapshot)=>{
       var allNotifications = []
       snapshot.docs.map(doc=>{
        var notification = doc.data();
        notification["doc_id"] = doc.id
allNotifications.push(notification) 
}); 
this.setState({ 
    allNotifications : allNotifications 
});
       
   }) 
}
componentDidMount(){
    this.getN()
}
key=(item,index)=>index.toString();
renderItem=({item,i})=>{
    return(
        <ListItem
        key={i}
        title={item.item_name}
        titleStyle={{color:'orange',fontSize:20}}
        subtitle={item.message}
        subtitleStyle={{maxWidth:270,color:'red'}}
        leftElement={<Image source={require('../ob.jpg')} style={{width:50,height:50}}/>}
        />
    )
}


    render(){
        return(
            <View >
                <MyHeader
                title={"All Notifications"}
                />
                <FlatList
                keyExtractor={this.key}
                data={this.state.allNotifications}
                renderItem={this.renderItem}
                />

            </View>
        )
    }
}