import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import styles from './style';

interface CalendarProps {
    onDateSelect: (date: Date, title: string) => void;
    title: string;
    onClose: () => void;
}

const Calendar = ({ onDateSelect, title, onClose }: CalendarProps) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // State for tracking the displayed month
    const [selectedMonth, setSelectedMonth] = useState(moment());

    // Handle month change
    const handlePrevMonth = () => {
        setSelectedMonth((prev) => prev.clone().subtract(1, 'months'));
    };

    const handleNextMonth = () => {
        setSelectedMonth((prev) => prev.clone().add(1, 'months'));
    };

    // Callback for date selection
    const handleDateChange = useCallback(
        (date: Date) => {
            onDateSelect(date, title);
        },
        [onDateSelect]
    );

    return (
        <View style={styles.mainContainer}>
            <GestureHandlerRootView style={styles.container}>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1} // Default to half-open state
                    snapPoints={useMemo(() => ['50%'], [])} // Adjusted for better control
                    onChange={(index) => {
                        if (index == -1) {
                            onClose()
                        }
                    }}
                    enablePanDownToClose={true}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <View style={styles.closeHeader}>
                            <TouchableOpacity onPress={onClose}>
                                <Text style={styles.close}>Close</Text>
                            </TouchableOpacity>
                            <Text style={[styles.title,{marginLeft:"28%"}]}>{title}</Text>
                        </View>
                        <View style={styles.header}>
                            <View style={styles.navButtons}>
                                <Text style={styles.navText}>{'>'}</Text>
                                <Text style={styles.title}>{moment(selectedMonth).format('MMMM-YYYY')}</Text>
                            </View>
                            <View style={styles.navButtons}>
                                <TouchableOpacity onPress={handleNextMonth}>
                                    <Text style={styles.navText}>{'>'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handlePrevMonth}>
                                    <Text style={styles.navText}>{'<'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <CalendarPicker
                            onDateChange={handleDateChange}
                            initialDate={selectedMonth.toDate()} // Set initial date
                            previousComponent={<Text />} // Hide default buttons
                            nextComponent={<Text />}
                            textStyle={{ color: 'gray', fontWeight: "400", fontSize: 16 }}
                            monthYearHeaderWrapperStyle={{ marginRight: "65%", color: "white" }} // Align to left
                            monthTitleStyle={{ fontsize: 12, color: "white" }}
                            yearTitleStyle={{ fontsize: 12, color: "white" }}
                            dayLabelsWrapper={{ borderBottomWidth: 0, borderTopWidth: 0, height: 70 }}
                            selectedDayTextColor={"#D3564C"}
                        />
                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        </View>
    );
};



export default Calendar;
