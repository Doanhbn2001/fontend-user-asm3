module.exports = (req, res, next) => {
  if (!req.user) {
    return res.json({ error: true });
  }
  next();
};
