import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        paddingHorizontal: "2%",
        paddingVertical: "20%"
    },
    popup: {
        width: '100%',
        height: '100%',
        backgroundColor: "white",
        borderRadius: 15
    },
    header: {
        width: "100%",
        height: "20%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingTop: "8%"
    },
    headerTextContainer: {
        width: "90%"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 28
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#f2f2f2",
        position: "absolute",
        right: 10,
        top: 10
    },
    cardComponents: {
        height: "58%",
        width: "100%",
        padding: "5%"
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
        top: "56%",
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
        marginTop: "5%",
        marginLeft: "5%"
    },
    footer:{
        width: "100%",
        paddingHorizontal:"5%"
    },
    termsBox:{
        width: "100%",
        flexDirection:"row",
        alignItems:"center",
    },
    tickBox:{
        borderWidth:0.5,
        height:20,
        width:20,
        borderRadius:5,
        borderColor:"gray"
    },
    termsText:{
        fontSize:13,
        marginLeft:"3%",
        textDecorationLine:"underline"
    },
    footerButtons:{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        marginTop:"8%"
    },
    button:{
        height:45,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
        paddingHorizontal:"5%"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:16
    }
});

export default styles