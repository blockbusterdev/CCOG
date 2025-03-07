import axios from "axios";
export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,

      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "3.111963",
          tr_latitude: tr_lat ? tr_lat : "3.114827",
          bl_longitude: bl_lng ? bl_lng : "101.6614987197085",
          tr_longitude: tr_lng ? tr_lng : "101.6641966802915",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "57cc436c43mshf518724bbf375e3p1ea99cjsn8d0ed5b683b5",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
