const path = require('path');


module.exports = {
    name : 'wordrelay-setting',
    mode : 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'] //app에 확장자명을 일일이 입력하기 귀찮을 때 사용
    },

    entry: {
        app: ['./client.jsx'], // 원래 WordRelay까지 같이 넣어주어야했지만 client에 WordRelay를 require 하고 있어서 자동으로 땡겨옴.
    }, // 입력

    module: {
        rules : [{
            test : /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-env'],
                plugin: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), // __dirname 현재 폴더를 의미 그 안의 dist를 가르킴
        filename: "app.js"
    }, // 출력

};