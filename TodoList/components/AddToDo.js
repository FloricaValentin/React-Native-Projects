import { useState } from 'react';
import { StyleSheet,TextInput,Button,View} from 'react-native';

const AddToDo = ({submitHandler}) => {
    const [text,setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
  return (
    <View>
   <TextInput
   style={styles.input}
   placeholder='New ToDo'
   onChangeText={changeHandler}>
   </TextInput>
   <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
    </View>
  )
}

const styles= StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddToDo