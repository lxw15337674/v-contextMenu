//热键提示转换。
// 例如: ctrl+v=>Ctrl+V
export default function hotKeyFilter(str: string): string {
  if (!str) {
    return '';
  }
  return str
    .split('+')
    .map((item) => {
      return item.slice(0, 1).toUpperCase() + item.slice(1);
    })
    .join('+');
}
