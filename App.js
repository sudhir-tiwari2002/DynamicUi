
import { StyleSheet,Text, View , SafeAreaView , Platform, Alert} from 'react-native';
import CustomButton from "./components/CustomButton/CustomButton"


export default function App() {
  return (
    <SafeAreaView style={styles.SafeContainer}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}> welcome </Text>
        <CustomButton title = "press me" onPress={()=>alert("pressed")}/>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeContainer :{
    flex:1,
    backgroundColor:"plum"
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop : Platform.OS === "android" ? 25 : 0,
    

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box:{
    padding:20
    // width:300,
    // height:300,
    // width:"70%",
    // height:"70%",
    // backgroundColor:"lightblue",
    // alignItems:"center",
    // justifyContent:"center"
  },
  text:{
    ...Platform.select ({
      ios: {
        color : "purple",
        fontSize : 24,
        fontStyle : "italic"
      },
      android : {
        color: "blue",
        fontSize: 30
      }
    }),
    fontWeight : "bold",
    textAlign: "center"
  }
});
