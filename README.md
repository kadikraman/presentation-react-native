This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Presentation: React to React Native - How Hard Can It Be?

If you've used React, you've probably also head of React Native: a wonderful fairy land where native mobile applications can be build using React and JavaScript. With just one codebase you can produce an app that runs natively on both iOS and Android without having to dig into any Java, Objective C or Swift code. Too good to be true?

[Meetup link](https://www.meetup.com/ReactJS-Girls-London/events/245438940/)


## Deploy
- `yarn build`
- replace `/static` with `./static` in `./build` (can use `sed -i -e 's/\/static/\.\/static/g' ./build/index.html`)
- `yarn deploy`


## TODO
Fix static assets not loading on gh pages
