type PasswordRules = {
  label: string;
  check: (value: string) => boolean;
};

export const passwordRules: Record<string, PasswordRules> = {
  minLenght: {
    label: "Password must be at least 8 characters long.",
    check: (value: string) => value.length >= 8,
  },
  upperCase: {
    label: "Password must contain at least 1 uppercase letter.",
    check: (value: string) => /[A-Z]/.test(value), //.test(value) returns tru if there's a match else false
  },
  specialChar: {
    label: "Password must contain at least 1 special character.",
    check: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
  },
  number: {
    label: "Password must contain at least 1 number.",
    check: (value: string) => /\d/.test(value),
  },
};

export type PasswordRuleKey = keyof typeof passwordRules;

export const getPasswordStrength = (value: string) => {
  const rules = Object.entries(passwordRules)
    .filter(([, rule]) => rule.check(value))
    .map(([key]) => key as PasswordRuleKey);

  let strengthLabel = "Weak";
  if (rules.length >= 3) strengthLabel = "Good";
  if (rules.length === 4) strengthLabel = "Strong";
  return { rules, strengthLabel };
};
