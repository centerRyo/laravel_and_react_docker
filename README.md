# このリポジトリについて
このリポジトリはLaravelをAPIとして使用し、ReactでSPAを実現するためのpracticeリポジトリとなります。
Laravel Reactそれぞれで開発したことはあったが、Reactをフロントで用いてLaravelをAPIとして使用するやり方がわからなかったので簡単なチュートリアル的なものをやってみようと思ったのが発端となります。

https://reffect.co.jp/laravel/laravel6-react-router#React_Router

チュートリアルはこちらのサイトを参考にさせていただきました。

# 使用技術とバージョン
- PHP: 7.4
- Laravel: 6.20.27
- React: 16.14.0
- Docker: 20.10.5
- docker-compose: 1.29.0

# 環境構築のやり方
## リポジトリをpull(or clone)する
```
$ git clone git@github.com:centerRyo/laravel_and_react_docker.git
```

## docker-compose up
```
$ docker-compose up -d
```

## laravelプロジェクト作成
本来、プロジェクトのディレクトリはgitignoreさせておくべきだが、practiceということもあり、環境とプロジェクトソースが混ざっている(あまりよくない)
```
$ docker-compose exec app bash
$ composer create-project "laravel/laravel=6.*" laravel_react
```

## laravelの動作確認
localhost:30001でアクセスすると画面が表示される
