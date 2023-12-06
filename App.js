
import { StyleSheet,Text, View , SafeAreaView} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.SafeContainer}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}> welcome </Text>
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
    fontSize:24,
    fontWeight : "bold",
    textAlign: "center"
  }
});
