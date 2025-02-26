import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import PasPopup from '@/components/PasPopup/PasPopup'
import GuestDetails from '@/components/GuestDetails/GuestDetails'
import InviteGuest from '@/components/InviteGuest/InviteGuest'
const HomeScreen = () => {
  return (
    <View style={{ flex: 1}}>
       <StatusBar
                backgroundColor="white"
                barStyle={"dark-content"}
            />
      <InviteGuest/>
    </View>
  )
}

export default HomeScreen