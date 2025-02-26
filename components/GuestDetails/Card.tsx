import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Card: React.FC<{ passType: string, pass: string, valid: string }> = ({ passType, pass, valid }) => {
    return (
        <View style={styles.cardComponents}>
            <View style={styles.card}>
                <Image source={require('../../assets/images/pass.png')} style={{ width: "100%", height: "50%", borderRadius: 8 }} />
                <View style={styles.imageLable}>
                    <Text style={styles.imageLableText}>{passType}</Text>
                </View>
                <Text style={styles.cardTitle}>{pass}</Text>
                <View style={styles.timeContainer}>
                    <View>
                        <Text style={styles.cardDescription}>Valid From</Text>
                        <Text style={styles.cardDescription}>{valid}</Text>

                    </View>
                    <View>
                        <Text style={styles.cardDescription}>Valid To</Text>
                        <Text style={styles.cardDescription}>{valid}</Text>
                    </View>
                </View>
                <View style={styles.shareContainer}>
                    <Text style={styles.shareText}>Share</Text>
                    <View style={styles.shareIcons}>
                        <View style={styles.shareBox}>
                            <View style={styles.share}>

                            </View>
                            <Text style={styles.cardDescription}>Email</Text>
                        </View>
                        <View style={styles.shareBox}>
                            <View style={styles.share}>

                            </View>
                            <Text style={styles.cardDescription}>Copy Link</Text>
                        </View>
                        <View style={styles.shareBox}>
                            <View style={styles.share}>

                            </View>
                            <Text style={styles.cardDescription}>WhatsApp</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Card