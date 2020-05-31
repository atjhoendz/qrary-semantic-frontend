<template>
    <v-container
        fluid
      >
        <h2 class="txtHead2">{{ textHeader }}</h2>
        <p>{{ isKosong ? 'Data buku tidak ditemukan':'' }}</p>
        <div class="text-center"
          v-if="loading == false && error == true"
        >
          <p>Dataset kosong, silahkan upload dataset terlebih dahulu di sini <a href="https://qrary-fuseki-service.herokuapp.com/" target="_blank">https://qrary-fuseki-service.herokuapp.com/</a></p>
          <a href="https://github.com/atjhoendz/qrary-semantic-frontend#upload-dataset" target="_blank">Bantuan</a>
        </div>
        <v-row
          v-if="loading == true"
        >
          <v-col
            v-for="i in 4"
            :key="i"
            cols="6"
            md="2"
          >
            <v-row>
              <v-skeleton-loader
                class="mx-3 mb-4"
                width="190"
                type="card, list-item"
                elevation="3"
              ></v-skeleton-loader>
            </v-row>
          </v-col>
        </v-row>
        <v-row
          v-if="loading == false && error == false"
        >
          <v-col
            v-for="book in books"
            :key="book.judul"
            cols='6'
            md='2'
          >
            <v-row>
              <v-card
                class="mx-3 mb-4"
                max-width="185"
                max-height="400"
                elevation="3"
                :style="{'text-align':'center'}"
                @click="gotoDetail(book.isbn)"
              >
                <v-img
                  class="white--text grey darken-4"
                  max-height="250"
                  :src="book.urlFoto"
                  :lazy-src="coverBookDefault"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <div style="text-align: center !important">
                  <v-card-title style="color: #112E4E; display: block !important; font-size: 14px; word-break: break-word; padding-bottom: 5px; line-height: 160%;">
                    {{ book.judul.length > 20 ? `${book.judul.substring(0, 20)}...` : book.judul }}
                  </v-card-title>
                </div>
                <v-card-text style="color: #7E7E7E; padding-top: 0px; font-size: 12px">
                  {{ book.penulis }}
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ListBooks',
    props: {
      resultBooks: Array
    },
    data:() => ({
        coverBookDefault: require('../assets/book_cover_default.jpg'),
        books: [],
        loading: true,
        error: false,
        message: '',
        snackbar: false,
        textHeader: 'Daftar Buku',
        isKosong: false
    }),
    computed: {
      bookState() {
        return this.$store.getters['all']
      },
      ...mapGetters([
        'all'
      ])
    },
    methods: {
      ...mapMutations([
        'searchResults'
      ]),
      gotoDetail(isbn) {
        this.$router.push({name:'details', params: {isbn: isbn}});
      }
    },
    mounted() {
      if ( !Object.keys(this.bookState).length ) {
        this.$axios
          .get('https://qrary-semantic-backend.herokuapp.com/api/books')
          .then(response => {
            if (response.data.success == false) {
              this.loading = false;
              this.error = true;
            } else {
              this.searchResults(response.data.data);
              this.loading = false;
            }
          });
      } else {
        this.books = this.$store.getters['all'];
        this.loading = false;
      }
    },
    watch: {
      bookState(newVal) {
        if(Object.keys(newVal).length == 0){
          this.isKosong = true;
        } else {
          this.isKosong = false;
        }
        this.books = newVal;
      }
    }
}
</script>
<style>
  .txtHead2{
    color: #083E77;
    margin-bottom: 20px;
  }
</style>