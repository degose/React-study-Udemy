# Redux-Middleware

- 참고: https://velopert.com/3401
- 참고: https://dobbit.github.io/redux/advanced/Middleware.html
- react sparklines: https://github.com/borisyankov/react-sparklines
- reaxt google maps: https://github.com/tomchentw/react-google-maps

### Middleware
- `action` - `middleware` -> `reducer` -> `store`
- 액션이 디스패치 되어서 리듀서에서 이를 처리하기 전에 사전에 지정된 작업들을 설정한다.(액션과 리듀서 사이의 중간자)
- 콘솔로그, 충돌 보고, 비동기 API와의 통신, 라우팅 등에 사용