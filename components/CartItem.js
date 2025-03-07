import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartItem = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("ItemScreen", {param: data})}
    className="rounded-md bg-white w-[165px] border border-gray-300 px-2 py-2  my-2 space-y-2 shadow-sm">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-36 rounded-md object-cover"
      />
      <Text className="text-[#428488] text-[15px] font-semibold mt-2">
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <View className="flex-row items-center gap-1">
        <FontAwesome name="map-marker" size={16} color="#8597a2" />
        <Text className="text-[#428488] text-[12px] ">
          {location?.length > 18 ? `${location.slice(0, 14)}...` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
