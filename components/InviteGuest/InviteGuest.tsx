import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import InputBox from '../InputBox/InputBox';

const InviteGuest = () => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestPhone, setGuestPhone] = useState('');

    const isFormValid = location && startDate && startTime && endDate && endTime && guestName && guestPhone;

    const handlePress = () => {
        console.log('Dummy function triggered');
    };

    const handleSubmit = () => {
        if (isFormValid) {
            console.log('Form submitted', { location, startDate, startTime, endDate, endTime, guestName, guestEmail, guestPhone });
            setLocation('');
            setStartDate('');
            setStartTime('');
            setEndDate('');
            setEndTime('');
            setGuestName('');
            setGuestEmail('');
            setGuestPhone('');
            ToastAndroid.show('Guest Created', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backButton}></View>
                <Text style={styles.headerText}>Invite Guest</Text>
            </View>

            <View style={styles.passType}>
                <Text style={styles.title}>PASS NAME</Text>
                <Text style={styles.passName}>Topaz Residential PASS</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.padder} />
            <InputBox label='Location' isButton={true} onPress={handlePress} value={location} onChangeText={setLocation} />

            <View style={styles.datePickers}>
                <View style={styles.subPicker}>
                    <InputBox label='Start Date' isButton={true} sub={true} onPress={handlePress} value={startDate} onChangeText={setStartDate} />
                </View>
                <View style={styles.subPicker}>
                    <InputBox label='Start Time' isButton={true} sub={true} onPress={handlePress} value={startTime} onChangeText={setStartTime} />
                </View>
            </View>
            <View style={styles.datePickers}>
                <View style={styles.subPicker}>
                    <InputBox label='End Date' isButton={true} sub={true} onPress={handlePress} value={endDate} onChangeText={setEndDate} />
                </View>
                <View style={styles.subPicker}>
                    <InputBox label='End Time' isButton={true} sub={true} onPress={handlePress} value={endTime} onChangeText={setEndTime} />
                </View>
            </View>
            <View style={{paddingHorizontal:"5%"}}>
                <View style={styles.divider} />

            </View>
            <View style={styles.padder} />
            <InputBox label='Guest Name' placeholder='Guest Name' value={guestName} onChangeText={setGuestName} />
            <InputBox label='Guest Email (Optional)' placeholder='Guest Email (Optional)' value={guestEmail} onChangeText={setGuestEmail} />
            <InputBox label='Guest Phone Number' placeholder='Guest Phone Number' value={guestPhone} onChangeText={setGuestPhone} />

            <View style={styles.submitButton}>
                <TouchableOpacity style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]} disabled={!isFormValid} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InviteGuest;
