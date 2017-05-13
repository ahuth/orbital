# Orbital

Declarative gravity simulation in React. Uses canvas and abuses React's context API.

Something like:

```js
<Loop>
  <Space>
    <Body position={new Point(500, 400)} velocity={new Point(-10, 38)} mass={1} radius={5} color="white" />
    <Body position={new Point(700, 700)} velocity={new Point(-20, -30)} mass={1} radius={5} color="white" />
    <Body position={new Point(350, 350)} mass={50} radius={20} color="red" />
  </Space>
</Loop>
```

will result in:

![screenshot](https://cloud.githubusercontent.com/assets/2503289/26029677/3227a072-37f0-11e7-9c05-7635f25e5585.gif)
