exports.getHomeRoute = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You got access to the home data in this route",
    });
};
