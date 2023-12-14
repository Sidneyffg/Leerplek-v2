export function authMiddleware() {
  return (req, res, next) => {
    next();
  }
}