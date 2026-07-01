export function formatHTML(code) {
  const indent = "  ";
  let formatted = "";
  let depth = 0;
  const lines = code.replace(/>\s*</g, ">\n<").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("</")) depth--;
    formatted += indent.repeat(Math.max(0, depth)) + trimmed + "\n";
    if (
      trimmed.startsWith("<") &&
      !trimmed.startsWith("</") &&
      !trimmed.endsWith("/>")
    )
      depth++;
  }
  return formatted;
}

export function formatCSS(code) {
  let formatted = "";
  let depth = 0;
  const lines = code
    .replace(/\{/g, "{\n")
    .replace(/\}/g, "\n}")
    .replace(/;/g, ";\n")
    .split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed === "}") depth = Math.max(0, depth - 1);
    formatted += "  ".repeat(depth) + trimmed + "\n";
    if (trimmed.includes("{")) depth++;
  }
  return formatted;
}

export function formatJS(code) {
  let formatted = "";
  let depth = 0;
  const lines = code
    .replace(/\{/g, "{\n")
    .replace(/\}/g, "\n}")
    .replace(/;/g, ";\n")
    .split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed === "}") depth = Math.max(0, depth - 1);
    formatted += "  ".repeat(depth) + trimmed + "\n";
    if (
      trimmed.endsWith("{") ||
      (trimmed.endsWith("(") && !trimmed.includes(")"))
    )
      depth++;
  }
  return formatted;
}
