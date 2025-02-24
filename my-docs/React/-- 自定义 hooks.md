> Create by **fall** on 30 Aug 2024
> Recently revised in 30 Aug 2024

## 自定义 Hooks

### useFetch

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
```

### useMousePosition

```tsx
function useMousePosition(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
```





## 参考文章

| 作者 | 链接 |
| ---- | ---- |
|      |      |
|      |      |
|      |      |
|      |      |
|      |      |



