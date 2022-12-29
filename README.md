## versionUp

- mantine ver5 → ver6
```
yarn add  @emotion/server @emotion/react
```
ver4の時は自動でインストールしていた

- [yarn upgrade](https://qiita.com/teinen_qiita/items/18ca1fb433914e09c9e4)

## yarn 3.3.1
- .yarnファイルが生成される
- nodemodulesがinstallされないので.yarnrc.ymlに下記が必要
```
nodeLinker: node-modules
```
