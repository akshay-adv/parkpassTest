import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Card: React.FC<{ passType: string, pass: string, valid: string }> = ({ passType, pass, valid }) => {
    return (
        <View style={styles.cardComponents}>
            <View style={styles.card}>
                <Image source={require('../../assets/images/pass.png')} style={{ width: "100%", height: "65%", borderRadius: 8 }} />
                <View style={styles.imageLable}>
                    <Text style={styles.imageLableText}>{passType}</Text>
                </View>
                <Text style={styles.cardTitle}>{pass}</Text>
                <Text style={styles.cardDescription}>Valid until {valid}</Text>
            </View>
        </View>
    )
}

export default Card