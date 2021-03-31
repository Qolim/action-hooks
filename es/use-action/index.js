"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = void 0;
var React = __importStar(require("react"));
/**
 * 事件-状态 绑定hook
 * @param action 需要执行的事件逻辑，接受的第一个参数为原状态值，后续的参数为事件接收的参数，返回跟新后的状态值
 * @param defaultState 默认状态值
 * @returns 返回一个元祖 第一项为执行绑定的事件函数，第二项为可用于监听的状态值
 */
function useAction(action, defaultState) {
    var _a = React.useState(defaultState), state = _a[0], set_state = _a[1];
    var actionBack = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        set_state(action.apply(void 0, __spreadArray([state], args)));
    };
    return [actionBack, state];
}
exports.useAction = useAction;
