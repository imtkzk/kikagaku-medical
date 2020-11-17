<template>
            <section id="other" class="sec sec--other">
              <div class="sec__in">
                <div class="cmn-sub cmn-subhead--other fade-up">
                  <h2 class="cmn-sub-head">オススメのその他のコース</h2>
                </div>
                <ul class="other fade-up">
                  <li class="fade-up">
                    <div class="other-accent other-accent--top"></div>
                    <div class="other-heads">
                      <h3 class="other-head"><span>学生</span>にはこちらもオススメ</h3>
                    </div>
                    <div class="other-icon">
                      <img src="~/assets/img/other/icon01.png" class="img--fit" alt="icon">
                    </div>
                    <div class="other-content paragraph">
                      <p>Ikus.aiでは、学生を対象に無償で全てのコンテンツを公開しています。<br><strong>無料で幅広い知識を学びたい、学んだ内容で収益を得たい、学生同士のコミュニティに入りたいという方</strong>にオススメです。</p>
                    </div>
                    <div class="other-btn">
                      <div class="cmn-btn">
                        <div></div>
                        <a href="#"><span>詳細を確認する</span></a>
                      </div>
                    </div>
                    <div class="other-accent other-accent--bottom"></div>
                  </li>
                  <li class="fade-up">
                    <div class="other-accent other-accent--top"></div>
                    <div class="other-heads">
                      <h3 class="other-head"><span>より幅広い知識をつけたい方</span>に<br>オススメ</h3>
                    </div>
                    <div class="other-icon">
                      <img src="~/assets/img/other/icon02.png" class="img--fit" alt="icon">
                    </div>
                    <div class="other-content paragraph">
                      <p>AIの基礎だけでなくWebアプリケーションの作成、画像処理や自然言語処理に特化した内容などのより<strong>幅広い内容ついて学びたい方、またメンタリングつきでしっかり学びたい方</strong>にオススメです。</p>
                    </div>
                    <div class="other-btn">
                      <div class="cmn-btn">
                        <div></div>
                        <a href="#"><span>詳細を確認する</span></a>
                      </div>
                    </div>
                    <div class="other-accent other-accent--bottom"></div>
                  </li>
                </ul>
              </div>
            </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';

/*  other
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--other {
  padding: vw-sp(150) 0 vw-sp(80) 0;
}

@media screen and (min-width: $breakpoint1) {

  .sec--other {
    padding: vw-pc(120) 0 vw-pc(70) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--other {
    padding: 120px 0 70px 0;
  }
}


/* ---------------------------------- heading */

.cmn-subhead--other {
  margin-bottom: vw-sp(80);
  text-align: center;
}

@media screen and (min-width: $breakpoint1) {

  .cmn-subhead--other {
    margin-bottom: vw-pc(50);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-subhead--other {
    margin-bottom: 50px;
  }
}



/* ---------------------------------- component */

.other li {
  position: relative;
  margin: 0 auto vw-sp(60) auto;
  padding: vw-sp(80) vw-sp(40);
  width: vw-sp(640);
  text-align: center;
}

.other li:last-child {
  margin-bottom: 0;
}

.other-accent--top:before,
.other-accent--top:after,
.other-accent--bottom:before,
.other-accent--bottom:after {
  content: '';
  position: absolute;
  background-color: $color-green;
}

.other-accent--top:before,
.other-accent--bottom:before {
  width: 1px;
  height: vw-sp(40);
}

.other-accent--top::after,
.other-accent--bottom::after {
  width: vw-sp(40);
  height: 1px;
}

.other-accent--top:before,
.other-accent--top:after {
  top: 0;
  left: 0;
}

.other-accent--bottom:before,
.other-accent--bottom:after {
  right: 0;
  bottom: 0;
}



@media screen and (min-width: $breakpoint1) {

  .other {
    display: flex;
    justify-content: space-between;
  }

  .other li {
    margin: 0;
    padding: vw-pc(80) vw-pc(60);
    width: vw-pc(580);
    height: vw-pc(670);
  }

  .other-accent--top:before,
  .other-accent--bottom:before {
    height: vw-pc(30);
  }

  .other-accent--top::after,
  .other-accent--bottom::after {
    width: vw-pc(30);
  }
}

@media screen and (min-width: $breakpoint2) {

  .other li {
    padding: 80px 60px;
    width: 580px;
    height: 670px;
  }

  .other-accent--top:before,
  .other-accent--bottom:before {
    height: 30px;
  }

  .other-accent--top::after,
  .other-accent--bottom::after {
    width: 30px;
  }


}

.other-heads {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(1.8em * 2);
}

.other-head {
  font-size: vw-sp(34);
  font-weight: 700;
  line-height: 1.8em;
  letter-spacing: .15em;
  span {
    color: $color-main;
  }
}

.other-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: vw-sp(190);
}

.other li:nth-child(1) .other-icon {
  width: vw-sp(98);
}

.other li:nth-child(2) .other-icon {
  width: vw-sp(95);
}

.other-content {
  text-align: left;
  strong {
    color: $color-green;
  }
}

.other-btn {
  margin: vw-sp(50) auto 0 auto;
  width: vw-sp(520);
}

@media screen and (min-width: $breakpoint1) {

  .other-head {
    font-size: vw-pc(24);
  }

  .other-icon {
    height: vw-pc(160);
  }

  .other li:nth-child(1) .other-icon {
    width: vw-pc(88);
  }

  .other li:nth-child(2) .other-icon {
    width: vw-pc(85);
  }

  .other-btn {
    position: absolute;
    left: 50%;
    bottom: vw-pc(75);
    margin: 0;
    width: vw-pc(318);
    transform: translateX(-50%);
  }
}

@media screen and (min-width: $breakpoint2) {

  .other-head {
    font-size: 24px; font-size: 2.4rem;
  }

  .other-icon {
    height: 160px;
  }

  .other li:nth-child(1) .other-icon {
    width: 88px;
  }

  .other li:nth-child(2) .other-icon {
    width: 85px;
  }

  .other-btn {
    bottom: 75px;
    width: 318px;
  }
}

</style>