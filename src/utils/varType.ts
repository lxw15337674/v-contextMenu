// 变量数据类型判断
export default function typeJudgment(variable: any): string {
    return Object.prototype.toString.call(variable).split(' ')[1].slice(0, -1).toLowerCase();
}
