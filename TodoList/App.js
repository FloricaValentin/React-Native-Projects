import { useState } from 'react';
import { FlatList, StyleSheet, View,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {

  const [todos,setTodos] = useState ([
    {text: 'buy coffee' , key: '1'},
    {text: 'create an app', key:'2'},
    {text: 'play on switch', key:'3'}

  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler =  (text) => {

    if (text.length > 3 ) {
      setTodos((prevTodos) => {
        return [
          {text: text, key:Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Error!', 'Todos must be over 3 characters long',[
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }

  }
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <Header />
     <View style={styles.content}>
      <AddToDo submitHandler={submitHandler} />
      <View style={styles.list}>
         <FlatList
         data={todos}
         renderItem={({item}) => (
           <ToDoItem item={item} pressHandler={pressHandler} />
         )}
         />
      </View>
     </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
