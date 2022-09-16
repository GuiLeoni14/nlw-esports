import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <View >
      <Text>Mobile Developer
      </Text>
      <Button text='opa' />
    </View>
  );
}

interface ButtonProps {
  text: string;
}
function Button({ text}: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

