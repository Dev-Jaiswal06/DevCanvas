export default function beautifyCode(code, lang) {
  if (!code) return "";
  try {
    if (lang === "html") {
      return code
        .replace(/>\s*</g, ">\n<")
        .replace(/<(?!\/)/g, "\n<");
    }
    return code;
  } catch {
    return code;
  }
}
