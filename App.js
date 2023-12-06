
import { StyleSheet,Text, View , Dimensions} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}> welcome </Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width
const windowHight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    // width:300,
    // height:300,
    // width:"70%",
    // height:"70%",
    width: windowWidth>500 ? "70%" : "90%",
    height: windowHight> 600 ? "60%" : "90%",
    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:windowWidth>500 ? 50 : 24
  }
});
