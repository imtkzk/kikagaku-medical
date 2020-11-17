<template>
            <section id="learn" class="sec sec--learn">
              <div class="sec__in">
                <div class="cmn-head cmn-head--learn fade-up">
                  <p class="cmn-head__en">learn</p>
                  <h2 class="cmn-head__jp">動画で<span class="green">学習</span>、<br class="br--sp">テストで<span class="navy">実力確認</span></h2>
                </div>
                <ul class="learn">
                  <li class="fade-up">
                    <h3 class="learn-head">わかりやすい動画で学習</h3>
                    <div class="learn-image">
                      <img src="~/assets/img/learn/image01.jpg" srcset="~/assets/img/learn/image01.jpg 1x,~/assets/img/learn/image01-2x.jpg 2x" class="img--fit" alt="わかりやすい動画で学習">
                    </div>
                    <div class="learn-content paragraph">
                      <p>動画と資料で学習を進めます。時間や場所を問わず学習することが可能です。<br>修了した内容もいつでも復習することができます。</p>
                    </div>
                  </li>
                  <li class="fade-up">
                    <h3 class="learn-head">演習形式のテストで資格を取得</h3>
                    <div class="learn-image">
                      <img src="~/assets/img/learn/image02.jpg" srcset="~/assets/img/learn/image02.jpg 1x,~/assets/img/learn/image02-2x.jpg 2x" class="img--fit" alt="演習形式のテストで資格を取得">
                    </div>
                    <div class="learn-content paragraph">
                      <p>テストは従来の選択式ではなく、実際に計算を行いその結果を回答する演習形式を採用しています。ただ回答するのではなく、実力を確認することができます。</p>
                    </div>
                  </li>
                </ul>
                <div class="learn-three fade-up">
                  <div class="learn-three-image">
                    <img src="~/assets/img/learn/image03.jpg" srcset="~/assets/img/learn/image03.jpg 1x,~/assets/img/learn/image03-2x.jpg 2x" class="img--fit" alt="演習形式のテストで資格を取得">
                  </div>
                  <div class="learn-three-content">
                    <div class="learn-three-content">
                      <h3 class="learn-three-head">eラーニングプラットフォーム <br class="br--sp">ikus.ai</h3>
                      <div class="paragraph">
                        <p>メディカルAI専門コースは株式会社キカガクが提供するeラーニングプラットフォーム ikus.ai （読み方 : イクサイ）上で提供しています。<br>Ikus.ai では様々な先端技術に関するコンテンツを提供しています。</p>
                      </div>
                      <div class="learn-three-btn">
                        <div class="cmn-btn">
                          <div></div>
                          <a href="#"><span>ikus.ai についてもっと知る</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';
/*  learn
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--learn {
  padding: vw-sp(80) 0;
  background-image: url(~assets/img/learn/bg.jpg);
  background-size: cover;
}

@media screen and ( min-width:$breakpoint1) {

  .sec--learn {
    padding: vw-pc(120) 0;
  }
}

@media screen and ( min-width:$breakpoint2) {

  .sec--learn {
    padding: 120px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--learn {
  margin-bottom: vw-sp(100);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--learn {
    margin-bottom: vw-pc(115);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--learn {
    margin-bottom: 115px;
  }
}


/* ---------------------------------- component */

.learn {
  position: relative;
  margin-bottom: vw-sp(110);
}

.learn li {
  position: relative;
  margin: 0 auto vw-sp(120) auto;
  width: vw-sp(620);
}

.learn li:last-child {
  margin-bottom: 0;
}

.learn-content {
  position: relative;
  top: vw-sp(-55);
  margin-bottom: vw-sp(-55);
  padding: 1.2em 2.2em;
  background-color: $color-base;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
}


.learn li:nth-child(1) .learn-content {
  left: vw-sp(40);
}

.learn li:nth-child(2) .learn-content {
  right: vw-sp(40);
}


.learn-head {
  position: absolute;
  top: vw-sp(-50);
  padding: 1em .5em;
  background: linear-gradient(to bottom, #425389, #32b6b6);
  color: $color-base;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: .1em;
  white-space: nowrap;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  z-index: 2;
}

.learn li:nth-child(1) .learn-head {
  left: vw-sp(-45);
}

.learn li:nth-child(2) .learn-head {
  right: vw-sp(-45);
}

@media screen and (min-width: $breakpoint1) {

  .learn {
    display: flex;
    justify-content: space-between;
    margin-bottom: vw-pc(110);
  }

  .learn li {
    margin: 0;
    width: vw-pc(500);
  }

  .learn-content {
    top: vw-pc(-45);
    margin-bottom: vw-pc(-45);
    p {
      font-size: 1.125em;
    }
  }

  .learn li:nth-child(1) .learn-content {
    left: vw-pc(50);
  }

  .learn li:nth-child(2) .learn-content {
    right: vw-pc(50);
  }

  .learn-head {
    top: vw-pc(-50);
  }

  .learn li:nth-child(1) .learn-head {
    left: vw-pc(20);
  }

  .learn li:nth-child(2) .learn-head {
    right: vw-pc(20);
  }
}

@media screen and (min-width: $breakpoint2) {

  .learn {
    margin-bottom: 110px;
  }

  .learn li {
    width: 500px;
  }

  .learn-content {
    top: -45px;
    margin-bottom: -45px;
    padding: 1.2em 2.2em;
    p {
      font-size: 1.125em;
    }
  }

  .learn li:nth-child(1) .learn-content {
    left: 50px;
  }

  .learn li:nth-child(2) .learn-content {
    right: 50px;
  }

  .learn-head {
    top: -50px;
  }

  .learn li:nth-child(1) .learn-head {
    left: 20px;
  }

  .learn li:nth-child(2) .learn-head {
    right: 20px;
  }
}

.learn-three {
  position: relative;
  margin-left: auto;
  padding: vw-sp(350) vw-sp(35) vw-sp(50) vw-sp(35);
  width: 100%;
  background-color: $color-base;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
}

.learn-three:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: vw-sp(201);
  height: vw-sp(215);
  background-image: url(~assets/img/learn/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.learn-three-image {
  position: absolute;
  top: vw-sp(-45);
  left: vw-sp(-30);
  width: vw-sp(500);
}

.learn-three-content {
  position: relative;
  z-index: 2;
}

.learn-three-head {
  margin-bottom: .8em;
  color: $color-main;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.6em;
  letter-spacing: .1em;
}

.learn-three-btn {
  margin: vw-sp(45) auto 0 auto;
  width: 100%;
}

@media screen and (min-width: $breakpoint1) {

  .learn-three {
    padding: vw-pc(50) vw-pc(55) vw-pc(50) vw-pc(445);
    width: vw-pc(1100);
  }

  .learn-three:before {
    width: vw-pc(201);
    height: vw-pc(215);
  }

  .learn-three-image {
    top: vw-pc(-25);
    left: vw-pc(-100);
    width: vw-pc(500);
  }

  .learn-three-btn {
    margin: vw-pc(35) 0 0 auto;
    width: vw-pc(425);
  }
}

@media screen and (min-width: $breakpoint2) {

  .learn-three {
    padding: 50px 55px 50px 445px;
    width: 1100px;
  }

  .learn-three:before {
    width: 201px;
    height: 215px;
  }

  .learn-three-image {
    top: -25px;
    left: -100px;
    width: 500px;
  }

  .learn-three-btn {
    margin: 35px 0 0 auto;
    width: 425px;
  }
}

</style>