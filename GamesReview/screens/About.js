import { StyleSheet,View,Text } from "react-native";
import { globalStyles } from "../styles/global";


const About = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})
export default About