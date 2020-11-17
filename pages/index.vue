<template>
    <div>
        <Header />
          <div class="container">
            <Hero />
            <Intro />
            <Learn />
            <Appropriate />
            <Constitution />
            <Course />
            <Voice />
            <Flow />
            <Other />
          </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '~/components/organisms/common/Header.vue'
    import Hero from '~/components/organisms/medical/Hero.vue'
    import Intro from '~/components/organisms/medical/intro.vue'
    import Learn from '~/components/organisms/medical/learn.vue'
    import Appropriate from '~/components/organisms/medical/appropriate.vue'
    import Constitution from '~/components/organisms/medical/constitution.vue'
    import Course from '~/components/organisms/medical/course.vue'
    import Voice from '~/components/organisms/medical/voice.vue'
    import Flow from '~/components/organisms/medical/flow.vue'
    import Other from '~/components/organisms/medical/other.vue'
    import Footer from '~/components/organisms/common/Footer.vue'

    export default {
        components: {
            Header,
            Hero,
            Intro,
            Learn,
            Appropriate,
            Constitution,
            Course,
            Voice,
            Flow,
            Other,
            Footer
        }
    }
</script>