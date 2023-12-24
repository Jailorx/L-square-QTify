import axios from "axios";

export const BACK_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACK_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACK_ENDPOINT}/albums/new`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACK_ENDPOINT}/albums/songs`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
export const fetchFilters = async () => {
  try {
    const res = await axios.get(`${BACK_ENDPOINT}/albums/filters`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
