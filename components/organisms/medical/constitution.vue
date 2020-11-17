<template>
            <section id="constitution" class="sec sec--cons">
              <div class="sec__in">
                <div class="fade-up">
                  <div class="cmn-head cmn-head--cons">
                    <p class="cmn-head__en">constitution</p>
                    <h2 class="cmn-head__jp">資格試験の<span class="green">構成</span></h2>
                  </div>
                  <p class="cons-sec-desc">基礎から<br class="br--sp"><span>実問題に取り組むための</span><br class="br--sp"><span>実践力までの習得</span>を目指します。</p>
                </div>
                <ul class="cons">
                  <li class="fade-up">
                    <p class="cons-num">PART 01</p>
                    <div class="cons-in">
                      <p class="cons-label">基礎編<span>▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎</span></p>
                      <div class="cons-image">
                        <img src="~/assets/img/constitution/image01.jpg" srcset="~/assets/img/constitution/image01.jpg 1x,~/assets/img/constitution/image01-2x.jpg 2x" class="img--fit" alt="大人工知能・機械学習脱ブラックボックスコース">
                      </div>
                      <div class="cons-content">
                        <h3 class="cons-head">人工知能・機械学習<br>脱ブラックボックスコース</h3>
                        <ul class="list list--dot">
                          <li>機械学習に必要な数学の基礎</li>
                          <li>単回帰分析、重回帰分析</li>
                          <li>ロジスティック回帰</li>
                          <li>ニュートラルネットワーク</li>
                          <li>PyTorchでの実装</li>
                        </ul>
                      </div>
                    </div>
                    <div class="cons-btn">
                      <div class="start-btn start-btn--kiso">
                        <p class="start-btn-label"><span>無料</span></p>
                        <div></div>
                        <a href="#"><p><span>基礎</span>編を受講</p></a>
                      </div>
                    </div>
                  </li>
                  <li class="fade-up">
                    <p class="cons-num">PART 02</p>
                    <div class="cons-in">
                      <p class="cons-label"><span>▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎</span>応用編</p>
                      <div class="cons-image">
                        <img src="~/assets/img/constitution/image02.jpg" srcset="~/assets/img/constitution/image02.jpg 1x,~/assets/img/constitution/image02-2x.jpg 2x" class="img--fit" alt="医療領域でのAIの実装">
                      </div>
                      <div class="cons-content">
                        <h3 class="cons-head">医療領域でのAIの実装</h3>
                        <ul class="list list--dot">
                          <li>ゲノム配列解析</li>
                          <li>心電図の異常検知</li>
                          <li>MRI画像のセグメンテーション</li>
                          <li>血液の顕微鏡</li>
                          <li>法律</li>
                          <li>倫理</li>
                        </ul>
                      </div>
                    </div>
                    <div class="cons-btn">
                      <div class="start-btn start-btn--ouyo">
                        <p class="start-btn-label"><span>無料</span></p>
                        <div></div>
                        <a href="#"><p><span>応用</span>編を受講</p></a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="cons-box paragraph">
                  <p>講座は基礎編と応用編の<br class="br--sp">2つのコースで構成されます。<br>基礎編→応用編の順に学び、全てのテストに<br class="br--sp">合格することで資格取得となります。</p>
                  <p>※AI とは主に機械学習に関する技術を指します。</p>
                </div>
              </div>
            </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';

/*  results
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--cons {
  padding: vw-sp(150) 0 vw-sp(120) 0;
}

.sec--cons:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/constitution/bg.jpg);
  background-size: cover;
  z-index: -1;
}

@media screen and ( min-width:$breakpoint1) {

  .sec--cons {
    padding: vw-pc(170) 0 vw-pc(65) 0;
  }
}

@media screen and ( min-width:$breakpoint2) {

  .sec--cons {
    padding: 170px 0 65px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--cons {
  margin-bottom: vw-sp(65);
}

.cons-sec-desc {
  margin-bottom: vw-sp(100);
  text-align: center;
  line-height: 1.8em;
  span {
    @include marker;
    color: $color-main;
    font-size: 1.33em;
    font-weight: 700;
  }
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--cons {
    margin-bottom: vw-pc(45);
  }

  .cons-sec-desc {
    margin-bottom: vw-pc(110);
    font-size: vw-pc(18);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--cons {
    margin-bottom: 45px;
  }

  .cons-sec-desc {
    margin-bottom: 110px;
    font-size: 18px; font-size: 1.8rem;
  }
}


/* ---------------------------------- component */

.cons {
  position: relative;
  margin-bottom: vw-sp(100);
  z-index: 3;
}

.cons > li {
  position: relative;
  margin: 0 auto vw-sp(170) auto;
  padding: vw-sp(100) vw-sp(70) vw-sp(80) vw-sp(70);
  width: 100%;
}

.cons > li:nth-child(1) {
  background: rgba(23,129,136,.15);
}

.cons > li:nth-child(2) {
  background: rgba(36,43,122,.15);
  margin-bottom: 0;
}

.cons-num {
  position: absolute;
  top: 0;
  font-family: $font2;
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: .15em;
  opacity: 0.5;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

.cons > li:nth-child(1) .cons-num {
  left: -.1em;
  color: $color-green;
}

.cons > li:nth-child(2) .cons-num {
  right: -.1em;
  color: $color-main;
}

.cons-content {
  position: relative;
  padding: 0 1.5em 1.5em 1.5em;
  background-color: $color-base;
}

.cons > li:nth-child(1) .cons-content {
  padding-top: 3em;
}

.cons > li:nth-child(2) .cons-content {
  padding-top: 2.3em;
}

.cons-head {
  position: absolute;
  left: 50%;
  display: inline-block;
  padding: .5em 1em;
  color: $color-base;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  line-height: 1.4em;
  letter-spacing: .1em;
  white-space: nowrap;
  transform: translateX(-50%);
}

.cons > li:nth-child(1) .cons-head {
  top: -2.1em;
  background-color: $color-green;
}

.cons > li:nth-child(2) .cons-head {
  top: -1.3em;
  background-color: $color-main;
}

@media screen and (min-width: $breakpoint1) {

  .cons {
    display: flex;
    align-items: flex-start;
    margin-bottom: vw-pc(140);
  }

  .cons > li {
    padding: vw-pc(110) vw-pc(90);
    width: 50%;
    height: vw-pc(700);
  }

  .cons > li:nth-child(1) {
    top: vw-pc(50);
    margin-bottom: vw-pc(-50);
  }

  .cons-num {
    font-size: 3.5em;
  }

  .cons-head {
    font-size: 1.5em;
  }
}

@media screen and (min-width: $breakpoint2) {

  .cons {
    margin-bottom: 140px;
  }

  .cons >li {
    padding: 110px 90px;
    height: 700px;
  }

  .cons > li:nth-child(1) {
    top: 50px;
    margin-bottom: -50px;
  }
}

.cons-in {
  position: relative;
}

.cons > li:nth-child(1) .cons-in {
  border: 2px solid $color-green;
}

.cons > li:nth-child(2) .cons-in {
  border: 2px solid $color-main;
}

.cons-label {
  position: absolute;
  top: -1.3em;
  display: flex;
  align-items: center;
  font-size: vw-sp(46);
  font-weight: 700;
  span {
    font-size: .5em;
    letter-spacing: .84em;
  }
}

.cons > li:nth-child(1) .cons-label {
  width: calc(100% + 1em);
  color: $color-green;
  span {
    margin-left: .7em;
  }
}

.cons > li:nth-child(2) .cons-label {
  justify-content: flex-end;
  color: $color-main;
}

.cons-box {
  position: relative;
  margin: 0 auto;
  padding: 1.7em 1em;
  width: vw-sp(710);
  border: vw-sp(3) solid #7c7c7c;
  background-color: $color-base;
  text-align: center;
  z-index: 3;
  p:nth-child(1) {
    font-weight: 700;
  }
  p:nth-child(2) {
    font-size: .875em;
  }
}

@media screen and (min-width: $breakpoint1) {

  .cons-label {
    font-size: vw-pc(36);
  }

  .cons-box {
    padding: 1.7em 0;
    width: vw-pc(700);
    border: vw-pc(2) solid #7c7c7c;
  }
}

@media screen and (min-width: $breakpoint2) {

  .cons-label {
    font-size: 36px; font-size: 3.6rem;
  }

  .cons > li:nth-child(1) .cons-label {
    width: calc(100% + 1em);
  }

  .cons-box {
    width: 700px;
    border: 2px solid #7c7c7c;
  }
}

.cons-btn {
  position: absolute;
  left: 50%;
  bottom: vw-sp(-45);
  display: flex;
  justify-content: space-between;
  width: vw-sp(330);
  transform: translateX(-50%);
  > div {
    width: 100%;
  }
}

@media screen and (min-width: $breakpoint1) {

  .cons-btn {
    bottom: vw-pc(-40);
    width: vw-pc(345);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cons-btn {
    bottom: -40px;
    width: 345px;
  }
}

</style>