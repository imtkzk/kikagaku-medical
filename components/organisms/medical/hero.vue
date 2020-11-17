<template>
    <div class="hero">
      <div class="hero-image"></div>
      <div class="hero-content">
        <div class="fade-left">
          <div class="cmn-catch">
            <p><span>医療領域で<br class="br--sp">AIを活用する力をつける</span></p>
          </div>
          <h1 class="site-title">日本メディカルAI学会<br class="br--sp">認定資格試験<br>メディカルAI専門コース</h1>
        </div>
        <div class="hero-btn fade-up">
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
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/_variable.scss';

/*  hero
------------------------------------------------------------------------------*/

.hero {
  position: relative;
  width: 100%;
  height: vw-sp(700);
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/hero/bg.jpg);
  background-size: cover;
  background-position: top right;
}

.hero-content {
  position: absolute;
  left: vw-pc(100);
  bottom: vw-sp(80);
}

.site-title {
  margin: vw-sp(35) 0 0 0;
  color: $color-main;
  font-family: $font3;
  font-size: vw-sp(50);
  line-height: 1.48em;
  letter-spacing: .2em;
}

@media screen and (min-width: $breakpoint1) {

  .hero {
    height: vw-pc(700);
  }

  .hero-image {
    width: vw-pc(1400);
  }

  .hero-content {
    bottom: vw-pc(50);
  }

  .site-title {
    margin: vw-pc(25) 0 0 0;
    font-size: vw-pc(56);
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero {
    height: 700px;
  }

  .hero-image {
    width: 1400px;
  }

  .hero-content {
    bottom: 50px;
  }

  .site-title {
    margin: 25px 0 0 0;
    font-size: 56px; font-size: 5.6rem;
  }
}



/* ---------------------------------- btn */

.hero-btn {
  margin: vw-sp(40) 0 0 0;
  width: vw-sp(670);
  display: flex;
  justify-content: space-between;
  > div {
    width: vw-sp(330);
  }
}

@media screen and (min-width: $breakpoint1) {

  .hero-btn {
    margin: vw-pc(30) 0 0 0;
    left: vw-pc(200);
    width: vw-pc(720);
    > div {
      width: vw-pc(345);
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero-btn {
    margin: 30px 0 0 0;
    width: 720px;
    > div {
      width: 345px;
    }
  }
}

</style>