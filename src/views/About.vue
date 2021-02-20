<template>
  <div class="about">
    <h1>This is an about page</h1>
       <div class="container">
        <ul>
            <li v-for="(value, key) in getItems" :key="key">
            {{ value }}
            </li>
        </ul>
        <paginate
        :page-count="getPageCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'＜'"
        :next-text="'＞'"
        :container-class="'pagination justify-content-center'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'page-item'"
        :prev-link-class="'page-link'"
        :next-class="'page-item'"
        :next-link-class="'page-link'">
        </paginate>
    </div>
  </div>
</template>

<script>

import paginate from 'vuejs-paginate'

var items = [];
 
for(var i=1; i<=105; i++){
  items.push('item-' + i);
}

export default {
  name: 'About',
  components: {
    paginate
  },
   data: function() {
        return {
            items: items,
            parPage: 10,
            currentPage: 1
        };
    },
    methods: {
        clickCallback: function おーい関数認識してるぞ(pageNum) {
            this.currentPage = Number(pageNum);
            // Object.assign(this.$appName,{aaa: this.syotoku});
            // console.log(this.$appName);
            console.log(pageNum);
        },
    },
    computed: {
        getItems: function() {
            let current = this.currentPage * this.parPage;
            let start = current - this.parPage;
            return this.items.slice(start, current);
        },
        getPageCount: function() {
            return Math.ceil(this.items.length / this.parPage);
        }
    }

}

</script>