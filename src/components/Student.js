import React from 'react';
import { Text, View } from 'react-native';

const Student = (props) => {
  const { studentName } = props;
  return (
    <View style={{ height: 100, width: 200 }}>
      <Text>{studentName}</Text>
    </View>
  );
};

export default Student;
