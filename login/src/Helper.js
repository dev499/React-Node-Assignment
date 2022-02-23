export function validateName(name) {
  const re =
    //Regular expression for name validation
    /^[A-Za-z ]{10,30}$/;
  return re.test(String(name));
}
