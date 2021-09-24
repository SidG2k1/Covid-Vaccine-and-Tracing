import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const App = (values) => {
    const [selectedValue, setSelectedValue] = useState(values.values[8]?values.values[8] : values.values[0]);
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: "100%", borderRadius:15 }}
                enabled={values.values[8]?false : true}
                itemStyle={{height: 50}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {values.values.map(function(x) {
                    return(
                        <Picker.Item label={x} value={x} />)
                })}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        alignItems: "center"
    }
});

export default App;