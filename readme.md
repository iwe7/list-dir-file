### 列出文件夹下所有文件
> rxjs

```ts
import { listDir, listDirFile } from 'list-dir-file';
// 列出文件夹及文件名
listDir(__dirname).subscribe(path=>{
    console.log(path)
});
```
