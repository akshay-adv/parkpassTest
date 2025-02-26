import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

interface inputProps {
    label: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    value?: string;
    isButton?: boolean;
    onPress?: () => void;
    sub?:boolean
}
const InputBox: React.FC<inputProps> = ({label, placeholder, onChangeText, value, isButton, onPress,sub}) => {
  return (
    <View style={[styles.container,{paddingHorizontal:sub?"2%":"5%"}]}>
      <TouchableOpacity style={[styles.inputBox,{paddingHorizontal:sub?"10%":"5%"}]} onPress={onPress} disabled={!isButton?true:false}>
        {
            isButton ?
            <Text style={styles.input}>{label}</Text>
            :
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={styles.input} placeholderTextColor={"#000"}/>
        }
      </TouchableOpacity>
    </View>
  )
}

export default InputBox