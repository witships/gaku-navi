<template>
  <HeaderNav />
  <section class="wapper">
    <!-- 戻る -->
    <router-link to="/game">
      <button class="material-symbols-outlined " @click="showGame = !showGame">
        first_page
      </button>
    </router-link>

    <main>
      <h3>タッチタイピング</h3>
      <div></div>
      <div>key:{{ key }}</div>
      <!-- 問題 -->
      <section class="question-area">
        <div>{{ curentQuestion.ja }}</div>
        <div>{{ curentQuestion.en }}</div>
        <hr>
        <div class="answer">{{ answer.join("") }} </div>
        <!-- <span v-show="showEnter">Enter!</span> -->
      </section>
      <!-- キーボード -->
      <section class="keylayout">
        <section class="keylayout1">
          <button v-for="item in   keyRow1" :key="item.name" :class="[
            `key`, `key${item.class}`,
            item.code == key ? `hit` : ``,
            item.code == justOne ? `here` : ``,
          ]">
            {{ item.name }}
          </button>
        </section>
        <section class="keylayout2">
          <button v-for="item in   keyRow2" :key="item.name" :class="[
            `key`, `key${item.class}`,
            item.code == key ? `hit` : ``,
            item.code == justOne ? `here` : ``,
          ]">
            {{ item.name }}
          </button>
        </section>
        <section class="keylayout3">
          <button v-for="item in   keyRow3" :key="item.name" :class="[
            `key`, `key${item.class}`,
            item.code == key ? `hit` : ``,
            item.code == justOne ? `here` : ``,
          ]">
            {{ item.name }}
          </button>
        </section>
        <section class="keylayout4">
          <button v-for="item in   keyRow4" :key="item.name" :class="[
            `key`, `key${item.class}`,
            item.code == key ? `hit` : ``,
            item.code == justOne ? `here` : ``,
          ]">
            {{ item.name }}
          </button>
        </section>
      </section>
    </main>
  </section>

</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'TouchTyping',
  components: {
    HeaderNav
  },
  data() {
    return {
      key: "",
      code: "",
      jakeys: [
        {
          "code": "半角/\n全角",
          "name": "半角/\n全角"
        },
        {
          "code": "1",
          "name": "1"
        },
        {
          "code": "2",
          "name": "2"
        },
        {
          "code": "3",
          "name": "3"
        },
        {
          "code": "4",
          "name": "4"
        },
        {
          "code": "5",
          "name": "5"
        },
        {
          "code": "6",
          "name": "6"
        },
        {
          "code": "7",
          "name": "7"
        },
        {
          "code": "8",
          "name": "8"
        },
        {
          "code": "9",
          "name": "9"
        },
        {
          "code": "0",
          "name": "0"
        },
        {
          "code": "-",
          "name": "-"
        },
        {
          "code": "^",
          "name": "^"
        },
        {
          "code": "¥",
          "name": "¥"
        },
        {
          "code": "back/space",
          "name": "back\nspace"
        },
        {
          "code": "tab",
          "name": "TAB"
        },
        {
          "code": "q",
          "name": "Q"
        },
        {
          "code": "w",
          "name": "W"
        },
        {
          "code": "e",
          "name": "E"
        },
        {
          "code": "r",
          "name": "R"
        },
        {
          "code": "t",
          "name": "T"
        },
        {
          "code": "y",
          "name": "Y"
        },
        {
          "code": "u",
          "name": "U"
        },
        {
          "code": "i",
          "name": "I"
        },
        {
          "code": "o",
          "name": "O"
        },
        {
          "code": "p",
          "name": "P"
        },
        {
          "code": "`",
          "name": "`"
        },
        {
          "code": "[",
          "name": "["
        },
        {
          "class": "Enter",
          "code": "Enter",
          "name": "Enter"
        },
        {
          "code": "capslock",
          "name": "CAPSLOCK"
        },
        {
          "code": "a",
          "name": "A"
        },
        {
          "code": "s",
          "name": "S"
        },
        {
          "code": "d",
          "name": "D"
        },
        {
          "code": "f",
          "name": "F"
        },
        {
          "code": "g",
          "name": "G"
        },
        {
          "code": "h",
          "name": "H"
        },
        {
          "code": "j",
          "name": "J"
        },
        {
          "code": "k",
          "name": "K"
        },
        {
          "code": "l",
          "name": "L"
        },
        {
          "code": ";",
          "name": ";"
        },
        {
          "code": ":",
          "name": ":"
        },
        {
          "code": "]",
          "name": "]"
        },
        {
          "class": "Lshift",
          "code": "Shift",
          "name": "shift"
        },
        {
          "code": "z",
          "name": "Z"
        },
        {
          "code": "x",
          "name": "X"
        },
        {
          "code": "c",
          "name": "C"
        },
        {
          "code": "v",
          "name": "V"
        },
        {
          "code": "b",
          "name": "B"
        },
        {
          "code": "n",
          "name": "N"
        },
        {
          "code": "m",
          "name": "M"
        },
        {
          "code": ",",
          "name": ","
        },
        {
          "code": ".",
          "name": "."
        },
        {
          "code": "/",
          "name": "/"
        },
        {
          "code": "\\",
          "name": "\\"
        },
        {
          "code": "Shift",
          "name": "shift"
        },
        {
          "code": "control",
          "name": "ctrl"
        },
        {
          "code": "win",
          "name": "WIN"
        },
        {
          "code": "alt",
          "name": "ALT"
        },
        {
          "code": "untitle",
          "name": "無変換"
        },
        {
          "class": "space",
          "code": "space",
          "name": ""
        },
        {
          "code": "untitle",
          "name": "変換"
        },
        {
          "code": "untitle",
          "name": "カタカナ\nひらがな"
        },
        {
          "code": "control",
          "name": "ctrl"
        }
      ],

      question: [[
        {
          "ja": "あいうえお",
          "en": "aiueo"
        },
        {
          "ja": "かきくけこ",
          "en": "kakikukeko"
        },
        {
          "ja": "さしすせそ",
          "en": "sasisuseso"
        },
        {
          "ja": "たちつてと",
          "en": "tatituteto"
        },
        {
          "ja": "なにぬねの",
          "en": "naninuneno"
        },
        {
          "ja": "はひふへほ",
          "en": "hahihuheho"
        },
        {
          "ja": "まみむめも",
          "en": "mamimumemo"
        },
        {
          "ja": "やゆよ",
          "en": "yayuyo"
        },
        {
          "ja": "らりるれろ",
          "en": "rarirurero"
        },
        {
          "ja": "わをん、。",
          "en": "wawon,."
        }
      ], [
        {
          "ja": "犬も歩けば棒にあたる",
          "en": "inumoarukebabouniataru"
        },
        {
          "ja": "論より証拠",
          "en": "ronyorisyouko"
        },
        {
          "ja": "花より団子",
          "en": "hanayoridango"
        },
        {
          "ja": "憎まれっ子世にはばかる",
          "en": "nikumarekkoyonihabakaru"
        },
        {
          "ja": "骨折り損のくたびれ儲け",
          "en": "honeorizonnnokutabiremouke"
        },
        {
          "ja": "屁をひって尻つぼめ",
          "en": "hewohittesiritubome"
        },
        {
          "ja": "年寄りの冷や水",
          "en": "tosiyorinohiyamizu"
        },
        {
          "ja": "ちりも積もれば山となる",
          "en": "tirimotumorebayamatonaru"
        },
        {
          "ja": "律儀者の子沢山",
          "en": "ritigimononokodakusann"
        },
        {
          "ja": "盗人の昼寝",
          "en": "nusuttonohirune"
        },
        {
          "ja": "瑠璃もはりも照らせば光る",
          "en": "rurimoharimoterasebahikaru"
        },
        {
          "ja": "老いては子に従え",
          "en": "oitehakonisitagae"
        },
        {
          "ja": "割れ鍋にとじ蓋",
          "en": "warenabenitojibuta"
        },
        {
          "ja": "かったいのかさ怨み",
          "en": "kattainokasaurami"
        },
        {
          "ja": "よしのずいから天井のぞく",
          "en": "yosinozuikaratenjounozoku"
        },
        {
          "ja": "旅は道づれ、世は情け",
          "en": "tabinomitizure,yohanasake"
        },
        {
          "ja": "良薬、口に苦し",
          "en": "ryouyaku,kutininigasi"
        },
        {
          "ja": "総領の甚六",
          "en": "souryounojinroku"
        },
        {
          "ja": "月夜に釜を抜かれる",
          "en": "tukiyonikamawonukareru"
        },
        {
          "ja": "念には念を入れよ",
          "en": "nennniyanenwoireyo"
        },
        {
          "ja": "泣きっ面に蜂",
          "en": "nakitturanihati"
        },
        {
          "ja": "楽あれば苦あり",
          "en": "rakuarebakurari"
        },
        {
          "ja": "無理が通れば道理が引っこむ",
          "en": "murigatoorebadoorigahikkomu"
        },
        {
          "ja": "嘘から出た真",
          "en": "usokaradetamakoto"
        },
        {
          "ja": "芋の煮えたも御存じない",
          "en": "imononietamogozonjinai"
        },
        {
          "ja": "喉元すぎれば、熱さ忘れる",
          "en": "nodomotosugireba,atusawasureru"
        },
        {
          "ja": "鬼に金棒",
          "en": "oninikanabou"
        },
        {
          "ja": "臭いものに蓋",
          "en": "kusaimononihuta"
        },
        {
          "ja": "安物買いの銭失い",
          "en": "yasumonogainozeniusinai"
        },
        {
          "ja": "負けるが勝ち",
          "en": "makerugakati"
        },
        {
          "ja": "芸は身を助ける",
          "en": "eigamiwotasukeru"
        },
        {
          "ja": "文はやりたし、書く手は持たぬ",
          "en": "humihayaritaku,kakutehamotanu"
        },
        {
          "ja": "子は三界の首枷",
          "en": "kohasangainokubikase"
        },
        {
          "ja": "得手に帆を揚げる",
          "en": "etenihowoageru"
        },
        {
          "ja": "亭主の好きな赤烏帽子",
          "en": "teisyunosukinaagaebosi"
        },
        {
          "ja": "頭かくして、尻かくさず",
          "en": "atamakakusite,sirikakusazu"
        },
        {
          "ja": "三べん廻って煙草にしょ",
          "en": "sanbennmawattetabakonisyo"
        },
        {
          "ja": "聞いて極楽、見て地獄",
          "en": "kiitegokuraku,mitejigoku"
        },
        {
          "ja": "油断大敵",
          "en": "yudanntaiteki"
        },
        {
          "ja": "目の上のたんこぶ",
          "en": "menouenotankobu"
        },
        {
          "ja": "身から出た錆",
          "en": "mikaradetasabi"
        },
        {
          "ja": "知らぬが仏",
          "en": "siranugahotoke"
        },
        {
          "ja": "縁は異なもの味なもの",
          "en": "enhainamonoajinamono"
        },
        {
          "ja": "貧乏暇なし",
          "en": "binbouhimanasi"
        },
        {
          "ja": "門前の小僧、習わぬ経を読む",
          "en": "monzennnokozou,narawanukyouwoyomu"
        },
        {
          "ja": "背に腹は代えられない",
          "en": "seniharahakaerarenai"
        },
        {
          "ja": "粋が身を食う",
          "en": "suigamiwokuu"
        }
      ]],
      questionIndex: 1,
      currentIndex: 0,
      answer: [],
      answerIndex: 0,
      sePa: new Audio("./common/sound/pa.mp3"),
      sePinpon: new Audio("./common/sound/pinpon.mp3"),
    }
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    onKeyDown(event) {
      this.key = event.key;
      this.code = event.code;
      // console.log("key:", this.key)
      switch (this.key) {
        case "Enter":
          if (this.showEnter) {
            this.currentIndex++
            this.answer = [];
            this.answerIndex = 0;
            this.sePinpon.play();
          } else {
            this.sePa.play();
            this.answer = [];
            this.answerIndex = 0;
          }
          break;
        default: {
          if (this.key == this.justOne) {
            this.answer.push(this.key)
            this.answerIndex++
          }

        }
      }
    }
  },
  computed: {
    // キーレイアウト
    keyRow1() {
      return this.jakeys.slice(0, 15);
    },
    keyRow2() {
      return this.jakeys.slice(15, 42);
    }, keyRow3() {
      return this.jakeys.slice(42, 55);
    }, keyRow4() {
      return this.jakeys.slice(55, 63);
    },
    // 問題
    curentQuestion() {
      return this.question[this.questionIndex][this.currentIndex];
    },
    // 
    justOne() {
      let correct = this.question[this.questionIndex][this.currentIndex].en.split("");
      if (this.curentQuestion.en.length == this.answer.join("").length) {
        return "Enter"
      } else {
        return correct[this.answerIndex];
      }
    },
    showEnter() {
      return this.curentQuestion.en.length == this.answer.join("").length
    }
  },
}
</script>

<style scoped>
.wapper {
  padding: 1rem;
}

main {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.question-area {
  margin: auto;
  font-size: x-large;
}

.answer {
  height: 3rem;
}

.key {
  margin: 0.1rem;
  padding: 0.5rem;
  white-space: pre-wrap;
  text-align: center;
  font-weight: bold;
  background-color: white;
  border: solid 1px gray;
  border-radius: 0.5rem;
}

.keylayout {
  max-width: 1000px;
  margin: auto;
}

.keylayout1 {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
}

.keylayout2 {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 2;
}

.keylayout3 {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
}

.keylayout4 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.keyEnter {
  grid-area: 1/14/3/14;
}

.keyLshift {
  grid-column: 1/3;
}

.keyspace {
  grid-column: 5/10;
}

.hit {
  background-color: gainsboro;
}

.here {
  background-color: rgba(var(--main-color-rgb), 0.5);
}
</style>