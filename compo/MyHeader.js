import React,{Component} from 'react';
import {Header} from 'react-native-elements';
import {View,Text} from 'react-native';

 const MyHeader = props=>{
return(
    
    <Header 
    centerComponent={{text:props.title,style:{color:'#90A5A9',fontSize:20,fontWeight:'bold'}}}
    backgroundColor="#eaf8fe"
    
    />
)
}
export default MyHeader;




        

