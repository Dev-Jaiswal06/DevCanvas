import { body, validationResult } from "express-validator";

const handleErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateRegister = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 50 }),
  body("email").isEmail().normalizeEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be 6+ characters"),
  handleErrors,
];

export const validateLogin = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email required"),
  body("password").notEmpty().withMessage("Password required"),
  handleErrors,
];

export const validateProfile = [
  body("name").optional().trim().isLength({ max: 50 }),
  body("bio").optional().trim().isLength({ max: 500 }),
  body("github").optional().trim().isURL(),
  body("linkedin").optional().trim().isURL(),
  body("website").optional().trim().isURL(),
  handleErrors,
];
