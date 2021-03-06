import ArticleBodySection from './ArticleBodySection.js';
import ArticleReferenceCard from './ArticleReferenceCard.js';

function getNGWords(entry) {
  if (entry == null) {
    return [];
  }
  const words = [
    '加藤純一',
    'zendesk.com/hc/',
    'xn--qckwaqj6a5l2ab.xyz',
    '江畑諒真',
  ];
  const ngWords = words.filter(word => {
    return entry.paragraphs.filter(p => {
      return p.text != null && p.text.indexOf(word) >= 0
    }).length > 0;
  });
  return ngWords;
}

export default {
  template: `
    <div class="card main-content py-2">
      <div class="card-body">
        <div class="card-title">
          <a :href="entry.url">■</a>
          <strong v-if="ngWords.length <= 0">{{ entry.title }}</strong>
          <strong v-else>NG</strong>
          <button v-if="entry.refer != null" class="btn btn-default btn-sm" @click="$emit('refer')">
            言及先を開く
          </button>
          <span class="text-inconspicuous">{{ entry.time }}</span>
          <span v-if="entry.refersCount > 0" class="text-refered">被言及：{{ entry.refersCount }}</span>
        </div>

        <div class="card-text">
          <div class="card pt-2 pl-2 pr-2 mb-2" v-if="entry.refer != null && entry.refer.loading">
            ...
          </div>
          <ArticleReferenceCard
            v-if="entry.refer != null && entry.refer.visible"
            :url="entry.refer.url"
            :title="entry.refer.title"
            :paragraphs="entry.refer.paragraphs"
            />
          <div v-if="ngWords.length <= 0">
            <ArticleBodySection :items="entry.paragraphs"/>
          </div>
          <div v-else>
            <strong>NG</strong>: <span v-for="word in ngWords" :key="word">{{word}} </span>
          </div>
        </div>
      </div>
    </div>
  `,
  components: {ArticleBodySection, ArticleReferenceCard},
  props: {
    entry: Object,
  },
  computed: {
    ngWords() {
      return getNGWords(this.entry);
    }
  },
};
