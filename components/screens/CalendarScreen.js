import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";

/*
time : number
day: DateData
*/

 const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

export default function CalendarScreen() {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        //const items = this.state.items || {}; essa linha gera o this.state error
    
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
    
            if (!items[strTime]) {
              items[strTime] = [];
              
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Atividade do dia ' + strTime.split('-')[2], // 'atividade do dia ' tal
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  day: strTime
                });
              }
            }
          }
          
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 1000);
      };
      
      const renderItem = (item) => {
          return (
              <TouchableOpacity style={styles.touchableContainer}>
                  <Card>
                      <Card.Content>
                          <View style={styles.viewCard}>
                           <Text>{item.name}</Text>
                           <Avatar.Text 
                           label="R"
                           backgroundColor= "#79c2d0"
                           color= "white"
                           />
                          </View>
                      </Card.Content>
                  </Card>
              </TouchableOpacity>
          );
      };

    return (
        <View style={styles.containerView}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2017-05-16'}
          renderItem={renderItem}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    viewCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    touchableContainer: {
      marginRight: 10,
      marginTop: 17,
    },
});