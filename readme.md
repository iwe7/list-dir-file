### 列出文件夹下所有文件
> rxjs

```ts
import { listDir, listDirFile } from 'list-dir-file';
// 列出文件夹
listDir(__dirname).subscribe(path=>{
    console.log(path)
});
// 列出文件名
listDirFile(__dirname).subscribe(file=>{
    console.log(file)
});
```
