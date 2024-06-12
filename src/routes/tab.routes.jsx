import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Form from "../screens/Form";
import Filial from "../screens/Filiais";

import { filiaisMocadas } from "../data/data";

import filiaisRepository from "../models/Listafiliais";
import Filiais from "../models/Filiais";

const schools = filiaisRepository.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#DC143C" : "#202020"}
            />
          ),
          tabBarLabel: "Início",
          tabBarActiveTintColor: "#DC143C",
          tabBarInactiveTintColor: "#202020",
        }}
      />

      <Tab.Screen
        name="Schools"
        component={schools}
        initialParams={{ schools }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="school"
              size={24}
              color={focused ? "#DC143C" : "#202020"}
            />
          ),
          tabBarLabel: "Escolas",
          tabBarActiveTintColor: "#DC143C",
          tabBarInactiveTintColor: "#202020",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: mockedBranchs }}
        options={{
          tabBarItemStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="school-circle-exclamation"
              size={24}
              color={focused ? "#DC143C" : "#202020"} />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#DC143C",
          tabBarInactiveTintColor: "#202020",
        }}
      />

      <Tab.Screen
        name="Form"
        component={Form}
        initialParams={{ school: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#DC143C" : "#202020"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#DC143C",
          tabBarInactiveTintColor: "#202020",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
