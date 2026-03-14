import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);

  React.useEffect(() => {
    try {
      console.log('App started successfully');
    } catch (e) {
      Alert.alert('Error', e.toString());
    }
  }, []);

  const handleNum = (num) => {
    try {
      setDisplay(display === '0' ? String(num) : display + num);
    } catch (e) {
      Alert.alert('Error', e.toString());
    }
  };

  const handleOp = (operator) => {
    try {
      setPrev(parseFloat(display));
      setOp(operator);
      setDisplay('0');
    } catch (e) {
      Alert.alert('Error', e.toString());
    }
  };

  const calculate = () => {
    try {
      const curr = parseFloat(display);
      let result = 0;
      if (op === '+') result = prev + curr;
      else if (op === '-') result = prev - curr;
      else if (op === '×') result = prev * curr;
      else if (op === '÷') result = prev / curr;
      setDisplay(String(result));
      setOp(null);
      setPrev(null);
    } catch (e) {
      Alert.alert('Error', e.toString());
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
  };

  const Button = ({text, onPress, style}) => (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <Button text="C" onPress={clear} style={styles.opBtn} />
        <Button text="÷" onPress={() => handleOp('÷')} style={styles.opBtn} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => handleNum(7)} />
        <Button text="8" onPress={() => handleNum(8)} />
        <Button text="9" onPress={() => handleNum(9)} />
        <Button text="×" onPress={() => handleOp('×')} style={styles.opBtn} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => handleNum(4)} />
        <Button text="5" onPress={() => handleNum(5)} />
        <Button text="6" onPress={() => handleNum(6)} />
        <Button text="-" onPress={() => handleOp('-')} style={styles.opBtn} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => handleNum(1)} />
        <Button text="2" onPress={() => handleNum(2)} />
        <Button text="3" onPress={() => handleNum(3)} />
        <Button text="+" onPress={() => handleOp('+')} style={styles.opBtn} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={() => handleNum(0)} />
        <Button text="." onPress={() => handleNum('.')} />
        <Button text="=" onPress={calculate} style={styles.eqBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'flex-end'},
  display: {fontSize: 60, color: '#fff', textAlign: 'right', marginBottom: 20},
  row: {flexDirection: 'row', marginBottom: 10},
  btn: {flex: 1, height: 80, backgroundColor: '#333', margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 40},
  btnText: {fontSize: 30, color: '#fff'},
  opBtn: {backgroundColor: '#f90'},
  eqBtn: {flex: 2, backgroundColor: '#f90'},
});
