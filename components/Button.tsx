import { styles } from "@/app/styles/styles";
import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, TextStyle, StyleProp } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<TouchableOpacityProps['style']>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, textStyle, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress} {...props}>
      <Text style={[styles.buttonStyle, styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
