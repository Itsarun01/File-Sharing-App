export const uploadImg = (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.log("Error while uploading image", error.message);
  }
};
