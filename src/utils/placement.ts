// 计算菜单位置
import numToPx from './numToPx';
export default function placement(
    menuSize: number,
    cursorPosition: number,
    windowPosition: number,
): string {
    let position = cursorPosition;
    if (position > windowPosition / 2) {
        position = cursorPosition - menuSize;
    }
    return numToPx(position);
}
