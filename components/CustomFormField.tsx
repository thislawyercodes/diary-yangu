import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '@/app/styles/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface CustomFormProps {
    title: string;
    placeholder?: string;
    value?: string;
    handleChangeText: (text: string) => void;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad'; // Add keyboardType here

}

const CustomFormField: React.FC<CustomFormProps> = ({ title, placeholder, handleChangeText }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(title === 'Password'); // Initially secure if title is 'Password'

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    return (
        <View style={styles.formFieldContainer}>
            <Text style={styles.formFieldLabel}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#9BA1A6"
                onChangeText={handleChangeText}
                secureTextEntry={secureTextEntry}
            />
            {title === 'Password' && (
                <TouchableOpacity onPress={toggleSecureEntry} style={styles.toggleButton}>
                    <MaterialCommunityIcons
                        name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} 
                        size={24}
                        color="#5F4C31" 
                    />           
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CustomFormField;
