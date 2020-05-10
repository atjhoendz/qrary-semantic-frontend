<template>
    <v-container
        fluid
        :class="container"
      >
        <v-row
          align="left"
          justify="left"
        >
          <template v-for="book in books">
            <v-card 
              :key="book.heading" 
              class="mx-auto" 
              max-width="350"
              elevation="3"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                :src="book.urlCover"
              >
                <v-card-title>
                  {{ book.judul }}
                </v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                {{ book.deskripsi }}
              </v-card-text>
            </v-card>
          </template>
        </v-row>
      </v-container>
</template>

<script>
import coverBookDefault from '../assets/book_cover_default.jpg'

export default {
    name: 'ListBooks',

    data:() => ({
        books: [
        {
          judul: 'Ini judul',
          deskripsi: 'ini deskripsi panjang sekali sampe ga kebaca apa isinya',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          deskripsi: 'ini deskripsi panjang sekali sampe ga kebaca apa isinya',
          urlCover: coverBookDefault
        },
        {
          judul: 'Ini judul',
          deskripsi: 'ini deskripsi panjang sekali sampe ga kebaca apa isinya',
          urlCover: coverBookDefault
        }
      ]
    })
}
</script>
<style>
    .container{
        padding-top: 30px;
    }
</style>