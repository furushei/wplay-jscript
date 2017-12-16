# wplay-jscript
WindowsのコマンドプロンプトからWAVEファイルを再生するシンプルなコマンド

# 使い方
```
> wplay FILE
```

# ビルド
次のコマンドでコンパイルすると`wplay.exe`が生成される。ただし`x.xxxxx`はバージョンによって変わる。
```
> C:\Windows\Microsoft.NET\Framework\v4.x.xxxxx\jsc.exe wplay.js
```

コンパイルに用いる`jsc.exe`はWindowsに標準で含まれていると思われる。
