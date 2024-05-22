import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const ScrollablePicker = ({ data, onValueChange, selectedValue }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        onValueChange(item.value);
        setIsModalVisible(false);
      }}
    >
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.modalContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  pickerText: {
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: "transparent",
    height: 100,
    paddingVertical: 10,
  },
  itemContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default ScrollablePicker;
