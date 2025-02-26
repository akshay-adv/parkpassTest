import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { StatusBar } from 'expo-status-bar'
import Card from './Card'

const GuestDetails = () => {
    return (
        <View style={styles.container}>
           
            <View style={styles.header}>
                <View style={styles.backButton}>

                </View>
                <Text style={styles.headerText}>Guest Information</Text>
                <View style={styles.backButton}>

                </View>
            </View>

            <View style={styles.guestDetails}>
                <View style={styles.status}>
                    <Text style={styles.statusText}>Active</Text>
                </View>
                <Text style={styles.guestName}>Jessica Smith</Text>
                <Text style={styles.email}>jessicasmith@gmail.com</Text>
                <Text style={styles.email}>+1 (123) 456-7890</Text>
            </View>
            <Card passType={"Unlimited temporary invitations"} pass={"Topaz Residential PASS"} valid={"08:30 24/07/2025"} />
        </View>
    )
}

export default GuestDetails