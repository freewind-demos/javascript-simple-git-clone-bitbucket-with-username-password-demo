JavaScript "simple-git" Clone BitBucket With Username Password Demo
===================================================================

使用"simple-git"以及username/password将指定的bitbucket仓库clone到本地

```
npm install
rm -rf local-repo
mkdir local-repo
node demo.js <username> <password>
```

注意`username`不能使用邮箱（因为里面的`@`会导致url出错），而应该使用用户名。

然后就会在`local-repo`目录下看到新clone下来的`demo-project`。
