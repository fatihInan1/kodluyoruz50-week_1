import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'

import { MyInput, MyButton } from './components'

function State_Hooks(props) {
    const
        [entry, setEntry] = useState(""),
        [list, setList] = useState([]),
        [user, setUser] = useState({ name: "John", surname: "Doe", age: 30 })

    // SINGLE STATE
    changeText = (text) => {
        setEntry(text)
    }

    // ARRAY STATE
    addToList = () => {
        let newList = [...list]
        newList.push({ myEntry: entry })
        setList(newList)
    }

    // OBJECT STATE
    updateObject = () => {
        let newUser = { ...user }
        newUser.age = newUser.age + 1
        setUser(newUser)
    }

    // CLASS: componentDidMount(){ ... }
    useEffect(() => {
        console.log("MOUNT");
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

            <Text style={{ fontSize: 40 }}>HOOKS</Text>

            <View style={{ flex: 1, padding: 10 }}>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={list}
                    renderItem={({ item }) => <Text>{item.myEntry}</Text>}
                />

                <MyInput textChange={changeText} />

                <MyButton myTitle="Listeyi Güncelle" myPress={addToList} />

            </View>

            <View style={{ flex: 1, padding: 10 }}>

                <Text>İsim: {user.name}</Text>
                <Text>Surname: {user.surname}</Text>
                <Text>Age: {user.age}</Text>

                <MyButton myTitle="Kişiyi Güncelle" myPress={updateObject} />

            </View>
        </SafeAreaView>
    )
}

export { State_Hooks }
