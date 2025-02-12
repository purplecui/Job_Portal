export const testController = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      mesg: "name is required",
    });
  }
  res.status(200).json({
    message: `Your name is ${name}`,
  });
};
