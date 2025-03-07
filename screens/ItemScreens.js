import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemScreens = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;

  //console.log(data);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="bg-white shadow-lg relative">
          <Image
            source={{
              uri: data?.photo?.images?.medium?.url
                ? data?.photo?.images?.medium?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            className="w-full h-60 rounded-2xl object-cover"
          />
          <View className="absolute top-0 left-0 bg-black opacity-40 z-10 h-full w-full rounded-2xl"></View>
          <View className="flex-row justify-between absolute top-5 px-6 inset-x-0 z-40">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="bg-white w-10 h-10 rounded-md justify-center items-center"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#06b2be] w-10 h-10 rounded-md justify-center items-center">
              <FontAwesome5 name="heartbeat" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between absolute bottom-5 px-6 inset-x-0 z-40">
            <View className="flex-row items-center space-x-2">
              <Text className="text-gray-100 text-xs">{data?.price_level}</Text>
              <Text className="text-gray-100 text-2xl font-bold">
                {data?.price}
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md justify-center {data?.isclosed ?  bg-[#f5585c] : bg-green-500  } ">
              <Text className=" text-white">
                {data?.isclosed ? "Closed Now" : " Open Now"}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[18px]">
              {data?.location_string?.length > 35
                ? `${data?.location_string.slice(0, 35)}..`
                : data?.location_string}
            </Text>
          </View>
        </View>

        <View className="pt-4 flex-row  items-center justify-between gap-2">
          {data?.rating && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-10 h-10 rounded-full bg-[#06b2be] items-center justify-center shadow-md">
                <FontAwesome name="star" size={20} color="white" />
              </View>
              <View>
                <Text className="text-[#515151] text-[12px]">
                  {data?.rating}
                </Text>
                <Text className="text-[#515151] text-[12px]">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-10 h-10 rounded-full bg-[#06b2be] items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={20} color="white" />
              </View>
              <View>
                <Text className="text-[#515151] text-[12px]">
                  {data?.price_level}
                </Text>
                <Text className="text-[#515151] text-[12px]">Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-10 h-10 rounded-full bg-[#06b2be] items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={20} color="white" />
              </View>
              <View>
                <Text className="text-[#515151] text-[12px] capitalize">
                  {data?.bearing}
                </Text>
                <Text className="text-[#515151] text-[12px]">Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.description}
          </Text>
        )}
        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className=" space-y-4 mt-8 bg-gray-100 rounded-2xl px-4 py-6">
          {data?.phone && (
            <View className="items-center flex-row space-x-4">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-[16px] text-[#515151]">{data?.phone}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-4 mb-4">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-[16px] text-[#515151]">
                {data?.address}
              </Text>
            </View>
          )}

          <View className="my-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center">
            <Text className="text-xl font-semibold uppercase tracking-wider text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreens;
