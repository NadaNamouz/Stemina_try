import { Text, View } from 'react-native';
import theme from '../lib/theme';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white, 
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, color: theme.colors.dark }}>
        STEMina
      </Text>
    </View>
  );
}
