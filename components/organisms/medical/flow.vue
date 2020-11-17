<template>
    
            <section id="flow" class="sec sec--flow">
              <div class="sec__in">
                <div class="cmn-head cmn-head--flow fade-up">
                  <p class="cmn-head__en">flow</p>
                  <h2 class="cmn-head__jp"><span class="green">日本メディカルAI学会<br class="br--sp">認定資格</span>取得までの流れ</h2>
                </div>
                <div class="flows">
                  <ul class="flow fade-up">
                    <li>
                      <p class="flow-num">Step<br><span>01</span></p>
                      <div class="flow-icon">
                        <img src="~/assets/img/flow/icon01.png" class="img--fit" alt="icon">
                      </div>
                      <h3 class="flow-head">申し込み<br class="br--pc">フォーム記入</h3>
                    </li>
                    <li>
                      <p class="flow-num">Step<br><span>02</span></p>
                      <div class="flow-icon">
                        <img src="~/assets/img/flow/icon02.png" class="img--fit" alt="icon">
                      </div>
                      <h3 class="flow-head">無料受講開始</h3>
                      <div class="flow-content">
                        <p>フォーム記入完了後に<br>アカウントが付与されます</p>
                      </div>
                    </li>
                    <li>
                      <p class="flow-num">Step<br><span>03</span></p>
                      <div class="flow-icon">
                        <img src="~/assets/img/flow/icon03.png" class="img--fit" alt="icon">
                      </div>
                      <h3 class="flow-head">テストの問題に<br class="br--pc">全て正解</h3>
                      <div class="flow-content">
                        <p>※基礎編、特化編の両方で<br class="br--pc">正解率100%</p>
                      </div>
                    </li>
                    <li>
                      <p class="flow-num">Step<br><span>04</span></p>
                      <div class="flow-icon">
                        <img src="~/assets/img/flow/icon04.png" class="img--fit" alt="icon">
                      </div>
                      <h3 class="flow-head">資格取得の<br class="br--pc">お申込み</h3>
                      <div class="flow-content">
                        <p>会員証発行費用として<br>10,000円(税別)が<br class="br--pc">必要となります。</p>
                      </div>
                    </li>
                  </ul>
                  <div class="fade-up">
                    <div class="flow-points">
                      <div class="flow-point flow-point--01">
                        <h3 class="flow-point-head">基礎編、応用編の順に<br class="br--sp">学習を進める</h3>
                        <div class="paragraph">
                          <p>コースは基礎編と応用編の2つのコースに分かれています。まずは基礎編から学習を開始し基礎力を身に付け、応用編に進みましょう。</p>
                        </div>
                      </div>
                      <div class="flow-point flow-point--02">
                        <h3 class="flow-point-head">基礎編・応用編の<br class="br--sp">全ての問題に正解</h3>
                        <div class="paragraph">
                          <p>資格試験を取得するためには基礎編、応用編の両方のコースで全ての問題に正解する必要があります。また、資格取得にはメディカルAI学会への入会が必要です。</p>
                        </div>
                      </div>
                    </div>
                    <div class="flow-caution">
                      <ul class="list list--kome">
                        <li>完全オンラインテストのため、不正行為と疑われる行動をとった場合自動的に資格取得応募の資格が剥奪されます。</li>
                        <li>資格取得のためには日本メディカルAI学会へ加入している必要があります。</li>
                        <li>コースは基礎編、特化編の2つのコースがあります。資格取得のためには両方のコースのテストで正解率100%が必要となります。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flow-btn fade-up">
                <div class="start-btn start-btn--kiso">
                  <p class="start-btn-label"><span>無料</span></p>
                  <div></div>
                  <a href="#"><p><span>基礎</span>編を受講</p></a>
                </div>
                <div class="start-btn start-btn--ouyo">
                  <p class="start-btn-label"><span>無料</span></p>
                  <div></div>
                  <a href="#"><p><span>応用</span>編を受講</p></a>
                </div>
              </div>
            </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';

/*  flow
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--flow {
  padding: vw-sp(80) 0 vw-sp(100) 0;
  background: linear-gradient(to right, #e0f4f4, #e3e5ed);
}

@media screen and (min-width: $breakpoint1) {

  .sec--flow {
    padding: vw-pc(65) 0 vw-pc(85) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--flow {
    padding: 65px 0 85px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--flow {
  margin-bottom: vw-sp(65);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--flow {
    margin-bottom: vw-pc(55);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--flow {
    margin-bottom: 55px;
  }
}


/* ---------------------------------- component */

.flows {
  position: relative;
}

.flow {
  position: relative;
  z-index: 2;
}

.flow li {
  position: relative;
  margin-bottom: vw-sp(50);
  padding: vw-sp(35) vw-sp(30);
  width: 100%;
  background-color: $color-base;
  border: 2px solid $color-green;
  border-radius: 10px;
  text-align: center;
}

.flow-num {
  display: inline-block;
  background: linear-gradient( to right,  #32b7b6 25%, #425389 75% );
  color: transparent;
  -webkit-background-clip: text;
  font-family: $font2;
  font-size: vw-sp(28);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .15em;
  span {
    font-size: 2em;
  }
}

@media all and (-ms-high-contrast: none) { /* IE10,11用 */
  .flow-num {
    background: none;
    color: #32b7b6;
    span {
      color: #425389;
    }
  }
}

.flow-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: vw-sp(120);
}

.flow li:nth-child(1) .flow-icon {
  width: vw-sp(63);
}

.flow li:nth-child(2) .flow-icon {
  width: vw-sp(66);
}

.flow li:nth-child(3) .flow-icon {
  width: vw-sp(50);
}

.flow li:nth-child(4) .flow-icon {
  width: vw-sp(57);
}

.flow-head {
  margin-bottom: .5em;
  color: $color-green;
  font-size: vw-sp(34);
  font-weight: 700;
  text-align: center;
  line-height: 1.4em;
  letter-spacing: .1em;
}

.flow-content {
  color: $color-green;
  line-height: 1.6em;
}

@media screen and (max-width: $breakpoint1-max) {

  .flow:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: vw-sp(60);
    width: vw-sp(8);
    height: 100%;;
    background-image: url(~assets/img/flow/line_sp.png);
    background-size:  vw-sp(8) auto;
    background-repeat: repeat-y;
  }
}

@media screen and (min-width: $breakpoint1) {

  .flow {
    display: flex;
    justify-content: space-between;
  }

  .flow:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: vw-pc(1135);
    height: vw-pc(5);
    background-image: url(~assets/img/flow/line.png);
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%);
  }

  .flow li {
    margin-bottom: 0;
    padding: vw-pc(25) vw-pc(15);
    width: vw-pc(280);
    border: vw-pc(2) solid $color-green;
    border-radius: vw-pc(10);
  }

  .flow-num {
    font-size: vw-pc(18);
  }

  .flow-icon {
    height: vw-pc(110);
  }

  .flow li:nth-child(1) .flow-icon {
    width: vw-pc(53);
  }

  .flow li:nth-child(2) .flow-icon {
    width: vw-pc(56);
  }

  .flow li:nth-child(3) .flow-icon {
    width: vw-pc(40);
  }

  .flow li:nth-child(4) .flow-icon {
    width: vw-pc(47);
  }

  .flow-head {
    font-size: vw-pc(24);
  }
}

@media screen and (min-width: $breakpoint2) {

  .flow:before {
    top: 50%;
    left: 50%;
    width: 1135px;
    height: 5px;
  }

  .flow li {
    padding: 25px 20px;
    width: 260px;
    border: 2px solid $color-green;
    border-radius: 10px;
  }

  .flow-num {
    font-size: 18px; font-size: 1.8rem;
  }

  .flow-icon {
    height: 110px;
  }

  .flow li:nth-child(1) .flow-icon {
    width: 53px;
  }

  .flow li:nth-child(2) .flow-icon {
    width: 56px;
  }

  .flow li:nth-child(3) .flow-icon {
    width: 40px;
  }

  .flow li:nth-child(4) .flow-icon {
    width: 47px;
  }

  .flow-head {
    font-size: 24px; font-size: 2.4rem;
  }
}

.flow-point {
  background-color: $color-base;
}

.flow-point:before {
  content: '';
  position: absolute;
  bottom: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent transparent $color-base transparent;
}

.flow-point-head {
  margin-bottom: .5em;
  color: $color-main;
  font-size: vw-sp(32);
  font-weight: 700;
  line-height: 1.6em;
  letter-spacing: .1em;
}

@media screen and (max-width: $breakpoint1-max) {

  .flow-point {
    position: absolute;
    left: vw-sp(120);
    padding: vw-sp(35) vw-sp(30);
    width: vw-sp(560);
    border-radius: vw-sp(15);
  }

  .flow li:nth-child(2) {
    margin-bottom: vw-sp(510);
  }

  .flow li:nth-child(3) {
    margin-bottom: vw-sp(560);
  }

  .flow-points .flow-point:nth-child(1) {
    top: vw-sp(880);
  }

  .flow-points .flow-point:nth-child(2) {
    top: vw-sp(1780);
  }

  .flow-point:before {
    left: vw-sp(40);
    border-width: 0 vw-sp(20) vw-sp(40) vw-sp(20);
  }
}

@media screen and (min-width: $breakpoint1) {

  .flow-points {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: vw-pc(45) 0 0 0;
  }

  .flow-point {
    position: relative;
    padding: vw-pc(35) vw-pc(30);
    width: vw-pc(574);
    border-radius: vw-pc(10);
  }

  .flow-point:before {
    border-width: 0 vw-pc(15) vw-pc(30) vw-pc(15);
  }

  .flow-points .flow-point:nth-child(1)::before {
    right: vw-pc(120);
  }

  .flow-points .flow-point:nth-child(2)::before {
    left: vw-pc(120);
  }

  .flow-point-head {
    font-size: vw-pc(24);
    text-align: center;
  }
}

@media screen and (min-width: $breakpoint2) {

  .flow-points {
    margin: 45px 0 0 0;
  }

  .flow-point {
    padding: 35px 30px;
    width: 574px;
    border-radius: 10px;
  }

  .flow-point:before {
    border-width: 0 15px 30px 15px;
  }

  .flow-points .flow-point:nth-child(1)::before {
    right: 120px;
  }

  .flow-points .flow-point:nth-child(2)::before {
    left: 120px;
  }

  .flow-point-head {
    font-size: 24px; font-size: 2.4rem;
  }
}

.flow-caution {
  margin: 2em auto 0 auto;
  width: 100%;
}

@media screen and (min-width: $breakpoint1) {

  .flow-caution {
    width: vw-pc(960);
  }
}

@media screen and (min-width: $breakpoint2) {

  .flow-caution {
    width: 960px;
  }
}

.flow-btn {
  position: absolute;
  left: 50%;
  bottom: vw-sp(-45);
  display: flex;
  justify-content: space-between;
  width: vw-sp(670);
  transform: translateX(-50%);
  > div {
    width: vw-sp(330);
  }
}

@media screen and (min-width: $breakpoint1) {

  .flow-btn {
    bottom: vw-pc(-40);
    width: vw-pc(720);
    > div {
      width: vw-pc(345);
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .flow-btn {
    bottom: -40px;
    width: 720px;
    > div {
      width: 345px;
    }
  }
}

</style>