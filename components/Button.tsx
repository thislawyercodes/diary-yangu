import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native"

interface ButtonProps{
    title: string;
    onPress: () => void;
}
const Button:React.FC<ButtonProps>=({title,onPress})=>{
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );




}



const styles = StyleSheet.create({
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 5,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
    },
  });


  export default Button;