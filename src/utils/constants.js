// ideally should be in env file
const GOOGLE_API_KEY = "AIzaSyBwKPq2DIjTujmW5RNmZpe6Yu-WVs9jXMk";

const MAX_RESULTS = 50;

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=" +
    MAX_RESULTS +
    "&regionCode=IN&key=" +
    GOOGLE_API_KEY;
