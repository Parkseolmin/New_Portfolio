# 포트폴리오 사이트 만들기 프로젝트ver.1

저에 대해 간략하게 소개하고, 그동안 만들어 보았던 작업물들을 보여드리는 사이트입니다.

1. [SHOPPING MALL SITE](https://remarkable-monstera-25cfcc.netlify.app/)
2. [WEATHER APP](https://monumental-hummingbird-b0c3ee.netlify.app/)
3. [API MOVIE INFO SITE](https://celebrated-torte-ecf85d.netlify.app/)
4. [TO DO LIST](https://celebrated-baklava-2ccfb5.netlify.app/)
5. [SEOUL ART CENTER](http://qoavkdl4.dothome.co.kr/seoulartscenter/index.html)
6. [SAMSUNG CARD](https://elegant-klepon-3fd064.netlify.app/)
7. [WEB STANDARD](https://celadon-griffin-6a779d.netlify.app/)

위의 사이트들을 만들어보며 HTML,CSS,JS,API,REACT 사용에 익숙해지도록 노력했습니다.
다양한 방법을 사용하여 흐름과 감각을 익히기 위한 좋은 시행착오가 되었습니다.

## 완성작 보기

미리보기 :http://qoavkdl3.dothome.co.kr/portfolio/index/index.html

## 사용 스택

- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.

## 프로젝트 준비

###CDN
1. gsap.min.js: GSAP(GreenSock Animation Platform)은 웹 애니메이션을 만드는 데 도움을 주는 라이브러리입니다. 요소들을 움직이거나 애니메이션 효과를 추가할 때 사용할 수 있습니다.

2. ScrollTrigger.min.js: GSAP의 확장 라이브러리 중 하나로, 스크롤 트리거를 사용하여 스크롤에 따라 요소들을 제어하고 애니메이션을 추가할 수 있게 해줍니다.

3. ScrollToPlugin.min.js: GSAP의 또 다른 확장 라이브러리로, 웹페이지 내에서 스크롤 이동을 스무스하게 만들어주는 플러그인입니다.

4. lenis.min.js: lenis는 애니메이션 효과와 인터랙티브 요소를 웹에 추가하는 데 도움을 주는 라이브러리로 보입니다. 자세한 내용은 해당 라이브러리의 문서를 확인하면 될 것 같아요.

5. jquery.min.js: jQuery는 웹 개발에서 자바스크립트 작업을 편리하게 해주는 라이브러리입니다. DOM 조작, 이벤트 처리, 애니메이션 등 다양한 작업을 쉽게 처리할 수 있도록 도와줍니다.

6. jquery-ui.min.js: jQuery UI는 jQuery를 확장한 라이브러리로, 사용자 인터페이스 요소를 쉽게 만들고 커스터마이징할 수 있게 도와줍니다. 대화상자, 날짜 선택기, 드래그 앤 드롭 등의 기능을 제공합니다.

```javascript
export default {
  root: 'src',
  build: {
    outDir: '../public',
  },
};
```
