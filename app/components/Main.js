import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';


//import Logo from 'Logo';
//import Form from 'Form';

export default class Main extends Component {
  render() {
    return ( 
<View style={styles.container}>
<StatusBar
      backgroundColor="rgba(52, 52, 52, .4)"
      barStyle="light-content"
    />
<ImageBackground source={require('../images/solar.jpg')} style={styles.backgroundImage}  blurRadius={1}> 

				<Image  style={{width:70, height: 70, alignItems: 'center',}}
          			source={require('../images/logo.jpg')}></Image> 
          		<Text style={styles.logoText}>Production Module App</Text>	
  		
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='white' 
              placeholder="Email"
              placeholderTextColor = "white"
              selectionColor="white"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='white' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "white"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
				{/* <Form type="Login"/> */}
				{/* <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View> */}
         </ImageBackground>
			</View>	
    );
  }
}

const styles = StyleSheet.create({
  container : {
    // backgroundColor:'#fff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },

  logoText : {
  	marginVertical: 15,
  	fontSize:18,
    color:'black',
    alignItems:'center',
  },
  button: {
    width:300,
    backgroundColor: 'rgba(255, 255, 255, .4)',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center'
  },
  backgroundImage: {
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   width: 400,
   height: null,

  }
});