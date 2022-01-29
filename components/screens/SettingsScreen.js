import React, {useState} from 'react';
import { Text, View, Pressable, StyleSheet, Switch } from'react-native';

export default function SettingsScreen({ setUser }) {
    
    const [mode, setMode] = useState(false);

    return(
        <View>
        <Switch value={mode} onValueChange={() => setMode((value) => !value)} />
        <View style={styles.viewCard}></View>
        <Pressable
            onPress={() => setUser(null)}
            // style={{ marginTop: '8px', padding: '4px', backgroundColor: '#00F', borderRadius: '20px'}}
        >
            <Text style={styles.textLogout}
                // style={{ fontSize: '24px', fontWeight: 'bold' }}
            >
                Logout
            </Text>
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    viewCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textLogout:{
        backgroundColor: '#79c2d0',
        color: 'white',
        width: '50%',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 25,
        elevation: 3,
        justifyContent: 'flex-end',
    },
});