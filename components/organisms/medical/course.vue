<template>
            <section id="course" class="sec sec--course">
              <div class="sec__in">
                <div class="cmn-head cmn-head--course fade-up">
                  <p class="cmn-head__en">course</p>
                  <h2 class="cmn-head__jp">コースの<span class="navy">特徴</span></h2>
                </div>
                <ul class="course">
                  <li class="fade-up">
                    <div class="course-content">
                      <h3 class="course-head">日本メディカルAI学会<br class="br--sp"> × キカガクが共同作成</h3>
                      <div class="course-paragraph">
                        <p>本コースは日本メディカルAI学会と過去 30,000 人以上の受講生実績がある株式会社キカガクが動画化したコンテンツとなっています。<br>講義の実績からわかりやすさを追求したコンテンツで学習を進めていただけます。</p>
                        <p class="hosoku gray">※動画コンテンツは Preferred Networks 社が作成した資料を一部変更を加え作成されています。</p>
                      </div>
                    </div>
                    <div class="course-image">
                      <div>
                        <img src="~/assets/img/course/image01.jpg" srcset="~/assets/img/course/image01.jpg 1x,~/assets/img/course/image01-2x.jpg 2x" class="img--fit" alt="日本メディカルAI学会 × キカガクが共同作成">
                      </div>
                    </div>
                  </li>
                  <li class="fade-up">
                    <div class="course-content">
                      <h3 class="course-head">手書きの数学と<br class="br--sp">ハンズオン形式で学ぶ</h3>
                      <div class="course-paragraph">
                        <p>機械学習に登場する難解な数学も、自分で手書き数学で解説し、理解を深めます。また、プログラミングパートでは、実際に手を動かしながら学びを進めるハンズオン形式を採用しています。<br>実際に使うことやより深い理解を目指したコンテンツ内容となっています。</p>
                      </div>
                    </div>
                    <div class="course-image">
                      <div>
                        <img src="~/assets/img/course/image02.jpg" srcset="~/assets/img/course/image02.jpg 1x,~/assets/img/course/image02-2x.jpg 2x" class="img--fit" alt="手書きの数学とハンズオン形式で学ぶ">
                      </div>
                    </div>
                  </li>
                  <li class="fade-up">
                    <div class="course-content">
                      <h3 class="course-head">実践力が身につく<br class="br--sp">演習形式のテストシステム</h3>
                      <div class="course-paragraph">
                        <p>本コースでは、学習を終えた後に数問のテストを受け、学んだ内容を理解しているかを確認します。<br>ただ学んだ内容を記述するのではなく、実際に計算やプログラミングをしなければ答えることができないといった内容となっています。</p>
                      </div>
                    </div>
                    <div class="course-image">
                      <div>
                        <img src="~/assets/img/course/image03.jpg" srcset="~/assets/img/course/image03.jpg 1x,~/assets/img/course/image03-2x.jpg 2x" class="img--fit" alt="実践力が身につく演習形式のテストシステム">
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
    
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';

/*  course
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--course {
  padding: vw-sp(80) 0 vw-sp(180) 0;
  z-index: 2;
}

.sec--course:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 vw-sp(60) 100vw;
  border-color: transparent transparent $color-base transparent;
  z-index: -1;
}

@media screen and (min-width: $breakpoint1) {

  .sec--course {
    padding: vw-pc(40) 0 vw-pc(55) 0;
  }

  .sec--course:before {
    border-width: 0 0 vw-pc(175) 100vw;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--course {
    padding: 40px 0 55px 0;
  }

  .sec--course:before {
    border-width: 0 0 175px 100vw;
  }
}


/* ---------------------------------- heading */

.cmn-head--course {
  margin-bottom: vw-sp(100);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--course {
    margin-bottom: vw-pc(130);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--course {
    margin-bottom: 130px;
  }
}


/* ---------------------------------- component */

.course li {
  position: relative;
  margin-bottom: vw-sp(180);
}

.course li:last-child {
  margin-bottom: 0;
}


.course li:after {
  content: '';
  position: absolute;
  bottom: vw-sp(-40);
  width: vw-sp(750);
  height: 30%;
  background-size: cover;
  z-index: -1;
}

.course li:nth-child(odd):after {
  left: vw-sp(-30);
}

.course li:nth-child(even):after {
  right: vw-sp(-30);
}

.course li:nth-child(1):after {
  background-image: url(~assets/img/course/bg01.jpg);
}

.course li:nth-child(2):after {
  background-image: url(~assets/img/course/bg02.jpg);
}

.course li:nth-child(3):after {
  background-image: url(~assets/img/course/bg03.jpg);
}

.course-content {
  position: relative;
  padding: vw-sp(210) vw-sp(35) vw-sp(40) vw-sp(35);
  width: vw-sp(700);
  background-color: $color-base;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.course-image {
  position: relative;
  width: vw-sp(750);
  z-index: 1;
}

@media screen and (max-width: $breakpoint1-max) {

  .course-content {
    margin-left: auto;
  }

  .course-image {
    top: vw-sp(-80);
    margin: 0 0 vw-sp(-80) vw-sp(-30);
  }
}

@media screen and (min-width: $breakpoint1) {

  .course li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: vw-pc(160);
  }

  .course li:after {
    bottom: vw-pc(-50);
    width: vw-pc(1600);
    height: vw-pc(360);
  }

  .course li:nth-child(odd):after {
    left: vw-pc(-95);
  }

  .course li:nth-child(even):after {
    right: vw-pc(-95);
  }

  .course-content {
    padding: vw-pc(115) vw-pc(40) vw-pc(30) vw-pc(40);
    width: vw-pc(650);
  }

  .course-image {
    width: vw-pc(550);
    height: vw-pc(400);
    > div {
      position: absolute;
      top: vw-pc(-45);
      width: vw-pc(600);
    }
  }

  .course li:nth-child(even) .course-image > div {
    right: 0;
  }

  .course li:nth-child(odd) .course-content {
    order: 2;
  }

  .course li:nth-child(odd) .course-image {
    order: 1;
  }

  .course li:nth-child(odd) .course-image > div {
    left: 0;
  }
}

@media screen and (min-width: $breakpoint2) {


  .course li {
    margin-bottom: 160px;
  }

  .course li:after {
    bottom: -50px;
    width: vw-pc(1600);
    height: 360px;
  }

  .course li:nth-child(odd):after {
    left: -95px;
  }

  .course li:nth-child(even):after {
    right: -95px;
  }

  .course-content {
    padding: 115px 40px 30px 40px;
    width: 650px;
  }

  .course-image {
    width: 550px;
    height: 400px;
    > div {
      top: -45px;
      width: 600px;
    }
  }
}

.course-head {
  position: absolute;
  top: vw-sp(50);
  left: vw-sp(-30);
  padding: .5em 1.3em;
  background: linear-gradient(to right, #32b7b6, #425389);
  color: $color-base;
  font-family: $font3;
  font-size: vw-sp(32);
  font-weight: 600;
  line-height: 1.6em;
  letter-spacing: .15em;
}

.course-paragraph {
  line-height: 2em;
}

@media screen and (min-width: $breakpoint1) {

  .course-head {
    top: vw-pc(30);
    left: vw-pc(-30);
    font-size: vw-pc(24);
  }
}

@media screen and (min-width: $breakpoint2) {

  .course-head {
    top: 30px;
    left: -30px;
    font-size: 24px; font-size: 2.4rem;
  }
}

</style>