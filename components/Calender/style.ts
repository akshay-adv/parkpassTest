import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 3,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    mainContainer: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        position: "absolute",
        bottom: 0,
        backgroundColor: 'rgba(0.2,0.2,0.2,0.2)'
    },
    navButtons: {
        flexDirection: 'row-reverse',
        alignItems:"center",
        justifyContent:"center"
    },
    navText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color:"#D3564C"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        top: 30,
        zIndex: 3,
        backgroundColor: "white",
        paddingHorizontal: "1%"
    },
    closeHeader:{
        flexDirection:"row",
        width:"100%",
        alignItems:"flex-start",
        position:"absolute",
        top:0,
        zIndex:10,
        paddingLeft:"1%"
    },
    close:{
        fontSize:14,
        fontWeight:"800",
        color:"#D3564C"
    }
});

export default styles