export function validateForm({ fullName, emailAddress, phoneNumber }) {
  const name = fullName.trim().replace(/\s+/g, " ");
  const normalizedPhone = phoneNumber.replace(/[\s\-()]/g, "");

  const nameRegex = /^[\p{L}][\p{L}\p{M}' .-]{1,149}$/u;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  const errors = {
    fullName: !name
      ? "This field is required"
      : !nameRegex.test(name)
      ? "Must be at least 2 letters"
      : null,
    emailAddress: !emailAddress
      ? "This field is required"
      : !emailRegex.test(emailAddress)
      ? "Invalid email address"
      : null,
    phoneNumber: !phoneNumber
      ? "This field is required"
      : !phoneRegex.test(normalizedPhone)
      ? "At least 11 - 15 digits"
      : null,
  };

  return errors;
}
