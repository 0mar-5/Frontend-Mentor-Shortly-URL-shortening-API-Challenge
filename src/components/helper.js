export const fetchShortUrl = async function (inputURL) {
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        url: inputURL,
      }).toString(),
    });
    const data = await response.json();
    return data.result_url;
  } catch (err) {
    console.error(err);
  }
};
