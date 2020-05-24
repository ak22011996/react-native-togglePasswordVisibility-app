import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';


class App extends React.Component {

        state = {
            value: 'Show',
            isPasswordVisible:true
        }

        toggle = () => {
            const newValue = this.state.isPasswordVisible;
            if (newValue == true) {
                this.setState({
                    isPasswordVisible: false,
                    value: 'Hide'
                })
            } else {
                this.setState({
                    isPasswordVisible: true,
                    value: 'Show'
                })
            }
        }
	
render(){
  return(
  		<View style={styles.container}>
		    <TextInput secureTextEntry={this.state.isPasswordVisible}
		    	style={{backgroundColor: '#a7a6a9',height:50,width:400,fontSize:30}}>
		    </TextInput>
		    <TouchableOpacity>
		        <Text style={{fontSize:40}} onPress={this.toggle}>{this.state.value}</Text>
		    </TouchableOpacity>
		</View>
	   )
 }

}

const styles = StyleSheet.create({
	container: {
		marginTop:100,
		flex:1,
		alignItems:'center'
	}
});

export default App;
