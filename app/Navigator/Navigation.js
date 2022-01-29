import * as React from 'react';
import { View, Text, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Screens
import SignUp from '../../components/screens/SignUp';
import Login from '../../components/screens/Login';
import CalendarScreen from '../../components/screens/CalendarScreen';
import ExercisesScreen from '../../components/screens/ExercisesScreen';
import ExercisesDetails from '../../components/screens/ExercisesDetails';
import SettingsScreen from '../../components/screens/SettingsScreen';

// import icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// import Theme
import {COLORS} from "../Theme";

//import API facebook
import * as Facebook from 'expo-facebook';

const Stack = createStackNavigator();
const StackNavigator = ({ user }) => {
    return (
        <Stack.Navigator
          screenOptions={{
          headerShown: false,
          }}
         
        >
            <Stack.Screen 
            name="ExercisesScreen" 
            component={props => <ExercisesScreen user={user} {...props} />} 
            />
            <Stack.Screen 
             name="ExercisesDetails"
             component={ExercisesDetails}
            />
        </Stack.Navigator>
    )
}

// COLOCAR NOMES NAS ABAS DA TABBAR

const Tab = createBottomTabNavigator();

export default function Navigation() {

  const [user, setUser] = React.useState(null);

  async function doLogin() {
      try {
        await Facebook.initializeAsync({
          appId: '2986066898321225',
        });
        const { type, token, expirationDate, permissions, declinedPermissions } =
          await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          setUser(await response.json());
        } else {
          // type === 'cancel'
          Alert.alert('Login cancelado.');
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }

    if (user) {
      return (
        <Tab.Navigator 
        initialRouteName="Exercicios" // change home screen
        screenOptions={({route}) => ({
             headerShown: false,
             tabBarShowLabel: false,
             tabBarActiveTintColor: '#7dace4', //#c4c1e0
             tabBarInactiveTintColor: '#d9dad7',//#7c73e6

            tabBarLabel: ({focused}) => {
                const labels ={
                Calendar: 'Calendar',
                AllExercises: 'Exercicios',
                Configuracoes: 'Configuracoes',
            };

            return (
                <Text
                 style={{
                     color: focused ? COLORS.accent : COLORS.black,
                     marginBottom: 8,
                     opacity: focused ? 1 : 0.6,
                     fontWeight: 'bold',
                 }}>
                    {labels[route.name]}
                </Text>
            );
         },
        })}>
            <Tab.Screen name="Calendario" component={CalendarScreen} options={{
                tabBarIcon: ({color, size}) => (
                <AntDesign name="calendar" size={25} color={color} />
                )
            }} />
            <Tab.Screen name="Exercicios" component={props => <StackNavigator user={user} {...props} />} options={{
                tabBarIcon: ({color, size}) => (
                <Feather name="book-open" size={25} color={color} />
                )
            }} />
            <Tab.Screen name="Configuracoes" component={(props) => <SettingsScreen setUser={setUser} {...props} />} options={{
                tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-sharp" size={25} color={color} />
                )
            }} />
        </Tab.Navigator>
   );
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={props => <Login doLogin={doLogin} {...props} />} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

{/* <Stack.Navigator initialRouteName={"ExcisesScreen"} headerMode="none">


<Stack.Screen 
  name="Login" 
  component={LoginScreen} 
/> */}
