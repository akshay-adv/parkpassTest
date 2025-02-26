import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop:"7%",
        backgroundColor:"#f2f2f2"
    },
   
    cardComponents: {
        height: "65%",
        width: "100%",
        padding: "5%",
        paddingTop:"0%"
    },
    card: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: "#f2f2f2",
        elevation: 0.5,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingTop: 10
    },
    imageLable: {
        width: "65%",
        height: 28,
        borderRadius: 8,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "absolute",
        top: "44%",
        left: "6%",
        alignItems: "center",
        justifyContent: "center"
    },
    imageLableText: {
        fontSize: 12,
        fontWeight: "600",
        color: "white"
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: "5%",
        marginLeft: "5%"
    },
    cardDescription: {
        fontSize: 10,
        color: "gray",
    },
    header:{
        width: "100%",
        height: 65,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    backButton:{
        width:35,
        height:35,
        borderRadius:20,
        backgroundColor:"#f2f2f2",
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        fontSize:18,
        fontWeight:"bold",
        right:"10%"
    },
    guestDetails:{
        width:"100%",
        padding:"5%"
    },
    status:{
        borderRadius:10,
        padding:2,
        backgroundColor:"#83AEB426",
        width:55,
        alignItems:"center",
        justifyContent:"center"
    },
    statusText:{
        fontSize:12,
        color:"black"
    },
    guestName:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:"2%"
    },
    email:{
        fontSize:10,
        color:"gray",
        marginTop:2,
        fontWeight:"500"
    },
    timeContainer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:"5%",
        paddingHorizontal:"5%"
    },
    shareContainer:{
        width:"100%",
        alignItems:"center",
    },
    shareText:{
        fontSize:14,
        color:"black",
        fontWeight:"600",
        marginTop:"5%"
    },
    shareIcons:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        width:"85%",
        marginTop:"5%"
    },
    share:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:"#f2f2f2",
        alignItems:"center",
        justifyContent:"center"
    },
    shareBox:{
        alignItems:"center",
        justifyContent:"center"
    }
});

export default styles