import { StyleSheet,Text,View } from "react-native";


const Header = () => {
  return (
    <View style={styles.header}>
    <View>
        <Text style={styles.headerText}>Game Review App</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
   header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   },
   headerText: {
     fontVariant: 'bold',
     fontSize: 20,
     color: '#333',
     paddingLeft: 30,
     letterSpacing: 1,
   }
})
export default Header