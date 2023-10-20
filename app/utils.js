const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

// initialize the Youtube API library
const youtube = google.youtube("v3");

const getPlaylistData = async (etag) => {
  // Create custom HTTP headers for the request to enable use of eTags
  const headers = {};
  if (etag) {
    headers["If-None-Match"] = etag;
  }
  const res = await youtube.playlists.list({
    part: "id,snippet",
    id: "PLIivdWyY5sqIij_cgINUHZDMnGjVx3rxi",
    headers: headers,
  });
  console.log("Status code: " + res.status);
  console.log(res.data);
  return res;
};

export default getPlaylistData;
