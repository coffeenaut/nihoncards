<script>
import KanaTable from './kanaTable.vue'
import KanaNav from './kanaNav.vue'
export default {
    data() {
        return {
            observer: null,
        }
    },
    components: {
        KanaTable,
        KanaNav
    },
    created() {
        this.observer = new IntersectionObserver(this.onElementObserved, {
            root: this.$el,
            threshold: 0.22,
        })
    },
    mounted() {
        this.$el.querySelectorAll('section[id]').forEach((section) => {
            this.observer.observe(section)
        })
    },
    beforeDestroy() {
        this.observer.disconnect()
    },
    methods: {
        onElementObserved(entries) {
            entries.forEach(({ target, isIntersecting }) => {
                const id = target.getAttribute('id')
                if (isIntersecting) {
                    this.$el
                        .querySelector(`nav li a[href="#${id}"]`)
                        .parentElement.classList.add('active')
                } else {
                    this.$el
                        .querySelector(`nav li a[href="#${id}"]`)
                        .parentElement.classList.remove('active')
                }
            })
        },
    },
}
</script>
<template>
    <div class="flex flex-col w-full items-center">
        <KanaNav />
        <main class="p-16">
        <div>
            <section id="overview">
                <span><span class="highlight">Kana tables</span> refer to organized charts or lists that display the syllabic characters of the Japanese writing system known as kana. Japanese has two types of kana:</span>
                <ul>
                    <li><span class="highlight">Hiragana</span> (ひらがな) – used for native Japanese words, grammatical functions, and when kanji (Chinese characters used in Japanese) are not available or too complex.</li>
                    <li><span class="highlight">Katakana</span> (カタカナ) – primarily used for foreign loanwords, names, onomatopoeia, and emphasis.</li>
                </ul>
                <span>Each kana table consists of rows and columns representing different sounds. Japanese is a phonetic language, and each kana represents a specific syllable (sound).</span>
            </section>
            <section id="structure">
                <div class="section-title">Structure of Kana Tables</div>
                <div>
                    Both the hiragana and katakana tables follow a similar structure, organized based on Japanese syllabary. A typical table is structured with consonant-vowel combinations:
                    <ul>
                        <li>Rows: Represent consonants (e.g., "k", "s", "t", "n", etc.).</li>
                        <li>Columns: Represent vowels (a, i, u, e, o).</li>
                    </ul>
                </div>
                <div>
                    <span>Here is a simplified example for both hiragana and katakana:</span>
                    <KanaTable :vowels="['a', 'i', 'u', 'e', 'o']" :consonants="['', 'k', 's', 't']" :ignores="[]" :showPhonetics="true" :displayKatakana="false" />
                    <span>Katakana follows the same structure but uses different symbols. For instance, the equivalent of か in katakana is カ.</span>
                </div>
            </section>
            <section id="extended">
                <span class="section-title">Extended Kana</span>
                <div>
                    <span>In addition to basic sounds, kana tables often include extended characters formed by combining kana with small versions of "や", "ゆ", or "よ", and characters with dakuten (゛) or handakuten (゜), which alter the sounds of the kana:</span>
                    <ul>
                        <li><span class="highlight">Dakuten</span> (゛): Adds a voiced sound (e.g., か becomes が).</li>
                        <li><span class="highlight">Handakuten</span> (゜): Adds a "p" sound (e.g., は becomes ぱ).</li>
                    </ul>
                    <span>These tables are essential for learning and mastering Japanese phonetics and writing.</span>
                </div>

            </section>
        </div>
        <nav class="section-nav">
            <ol class="bullet-list">
                <li><a href="#overview">Overview</a></li>
                <li><a href="#structure">Structure</a></li>
                <li><a href="#extended">Extended Kana</a></li>
            </ol>
        </nav>
    </main>
    </div>
</template>