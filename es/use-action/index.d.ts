/**
 * 事件-状态 绑定hook
 * @param action 需要执行的事件逻辑，接受的第一个参数为原状态值，后续的参数为事件接收的参数，返回跟新后的状态值
 * @param defaultState 默认状态值
 * @returns 返回一个元祖 第一项为执行绑定的事件函数，第二项为可用于监听的状态值
 */
export declare function useAction<S = undefined, A extends Array<any> = any[]>(action: (state: S, ...args: A) => S, defaultState: S): [(...args: A) => void, S];
