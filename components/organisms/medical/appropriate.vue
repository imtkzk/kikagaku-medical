<template>
            <section id="appropriate" class="sec sec--appro">
              <div class="sec__in">
                <div class="cmn-head cmn-head--appro fade-up">
                  <p class="cmn-head__en">appropriate</p>
                  <h2 class="cmn-head__jp">こんな方に<span class="navy">オススメ</span></h2>
                </div>
                <ul class="appro">
                  <li class="fade-up">
                    <div class="appro-image">
                      <img src="~/assets/img/appropriate/image01.jpg" srcset="~/assets/img/appropriate/image01.jpg 1x,~/assets/img/appropriate/image01-2x.jpg 2x" class="img--fit" alt="大学生/大学院生">
                    </div>
                    <div class="appro-content">
                      <h3 class="appro-head">大学生/大学院生</h3>
                      <div class="paragraph">
                        <p>AIについて基礎から学びたい、研究活動などにAIを取り入れたいといった学生にオススメです。</p>
                      </div>
                    </div>
                  </li>
                  <li class="fade-up">
                    <div class="appro-image">
                      <img src="~/assets/img/appropriate/image02.jpg" srcset="~/assets/img/appropriate/image02.jpg 1x,~/assets/img/appropriate/image02-2x.jpg 2x" class="img--fit" alt="医療従事者の方">
                    </div>
                    <div class="appro-content">
                      <h3 class="appro-head">医療従事者の方</h3>
                      <div class="paragraph">
                        <p>業務の改善や研究などにAIを活用するための基礎力を身につけたい方、資格試験を受けたい方にオススメです。</p>
                      </div>
                    </div>
                  </li>
                  <li class="fade-up">
                    <div class="appro-image">
                      <img src="~/assets/img/appropriate/image03.jpg" srcset="~/assets/img/appropriate/image03.jpg 1x,~/assets/img/appropriate/image03-2x.jpg 2x" class="img--fit" alt="医療メーカー勤務の方">
                    </div>
                    <div class="appro-content">
                      <h3 class="appro-head">医療メーカー勤務の方</h3>
                      <div class="paragraph">
                        <p>医療機器の開発や業務の改善のためにAIに関する知識を医療の文脈で学びたい方にオススメです。</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';

/*  results
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--appro {
  padding: vw-sp(80) 0 vw-sp(100) 0;
  z-index: 3;
}

.sec--appro:before {
  content: '';
  position: absolute;
  display: inline-block;
  top: vw-sp(310);
  left: 0;
  width: 100%;
  height: calc(100% - #{vw-sp(410)});
  background-color: $color-thin;
  z-index: -1;
}

.sec--appro:after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: vw-sp(65) 100vw 0 0;
  border-color: $color-base transparent transparent transparent;
}

@media screen and ( min-width:$breakpoint1) {

  .sec--appro {
    padding: vw-pc(110) 0 vw-pc(130) 0;
  }

  .sec--appro:before {
    top: vw-pc(290);
    height: vw-pc(400);
  }

  .sec--appro:after {
    border-width: vw-pc(175) 100vw 0 0;
  }
}

@media screen and ( min-width:$breakpoint2) {

  .sec--appro {
    padding: 110px 0 130px 0;
  }

  .sec--appro:before {
    top: 290px;
    height: 400px;
  }

  .sec--appro:after {
    border-width: 175px 100vw 0 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--appro {
  margin: 0 0 vw-sp(100) 0;
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--appro {
    margin: 0 0 vw-pc(105) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--appro {
    margin: 0 0 105px 0;
  }
}


/* ---------------------------------- component */

.appro li {
  margin: 0 auto vw-sp(60) auto;
  width: vw-sp(620);
  border: vw-sp(3) solid $color-green;
}

.appro li:last-child {
  margin-bottom: 0;
}

.appro-image {
  border-bottom: vw-sp(3) solid $color-green;
}

.appro-content {
  padding: vw-sp(35) vw-sp(25) vw-sp(40) vw-sp(25);
  background-color: $color-base;
}

.appro-head {
  margin-bottom: .3em;
  color: $color-green;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.6em;
  letter-spacing: .1em;
}

@media screen and (min-width: $breakpoint1) {

  .appro {
    display: flex;
    justify-content: space-between
  }

  .appro li {
    margin: 0;
    width: vw-pc(380);
    border: vw-pc(2) solid $color-green;
  }

  .appro-image {
    border-bottom: vw-pc(2) solid $color-green;
  }

  .appro-content {
    padding: vw-pc(30) vw-pc(20) vw-pc(35) vw-pc(20);
  }
}

@media screen and (min-width: $breakpoint2) {

  .appro li {
    margin: 0;
    width: 380px;
    border: 2px solid $color-green;
  }

  .appro-image {
    border-bottom: 2px solid $color-green;
  }

  .appro-content {
    padding: 30px 20px 35px 20px;
  }
}

</style>