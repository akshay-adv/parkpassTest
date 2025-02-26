import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Card from './Card';

const PasPopup = () => {
    const [name, setName] = React.useState<string>("Assem");
    const [passType, setPassType] = React.useState<string>("Unlimited temporary invitations");
    const [valid, setValid] = React.useState<string>("24/07/2025");
    const [pass, setPAss] = React.useState<string>("Topaz Residential PASS");
    return (
        <View style={styles.container}>
            <View style={styles.popup}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>{name} has assigned the Topaz Residential PASS to you. Would you like to accept it?</Text>
                    </View>
                    <View style={styles.closeButton}>
                    </View>
                </View>
                
                <Card passType={passType} pass={pass} valid={valid} />

                <View style={styles.footer}>
                    <View style={styles.termsBox}>
                        <View style={styles.tickBox}>

                        </View>
                        <Text style={styles.termsText}>Accept Member Terms & Conditions.</Text>
                    </View>
                    <View style={styles.footerButtons}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: "white", borderWidth: 0.5, borderColor: "gray", marginRight: 10 }]}>
                            <Text style={[styles.buttonText, { color: "black" }]}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Accept Pass</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PasPopup