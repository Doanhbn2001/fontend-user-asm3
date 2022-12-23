module.exports = (req, res, next) => {
  console.log(req.session.adminId);
  if (!req.session.adminId) {
    return res.json({ error: true });
  }
  next();
};
