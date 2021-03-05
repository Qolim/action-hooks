# action-hooks
hooks with action-state

## USE

  npm i action-hooks -S

## API

  useAction

```typescript
  /**
  * 事件-状态 绑定hook
  * @param action 需要执行的事件逻辑，接受的第一个参数为原状态值，后续的参数为事件接收的参数，返回跟新后的状态值
  * @param defaultState 默认状态值
  * @returns 返回一个元祖 第一项为执行绑定的事件函数，第二项为可用于监听的状态值
  */

  const [handle, count] = useAction<number,React.MouseEvent<HTMLButtonElement, MouseEvent>>(
    (s,e) => s + 1,
    0
  )

  <div className="App">
    <h1>{count}</h1>
    <button onClick={handle}>click-me</button>
  </div>

```
