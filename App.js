import * as React from 'react';
import { Text, View, NativeModules } from 'react-native';

const { RNReverseGeocode } = NativeModules;

const region = {
  latitude: 50,
  longitude: 14,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const searchText = 'Charles';
var jsonData;

const app = () => {
  const [jsonData, setJsonData] = React.useState(null);
  React.useEffect(() => {
    RNReverseGeocode.searchForLocations(
    searchText,
    region,
    (err, res) => {
      setJsonData({
        error: err,
        addresses: res
      })
    }
  );
  }, [])
  return (
    <View>
      <Text>{JSON.stringify(jsonData)}</Text>
    </View>
  );
};

export default app;

