<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div v-for="(item, index) in syotoku" :key="index" class="form-group row">
            <label :for="index"  class="col-sm-3 col-form-label">{{ item.ja }}</label>
            <div class="col-sm-9">
              <input type="number" v-model="syotoku[index].value" :id="index"/>
            </div>
          </div>
        </div>
        <div class="col">
          <div v-for="(item, index) in syotoku" :key="index" class="form-group row">
            <label class="col-sm-3 col-form-label">{{ item.ja }}</label>
            <syotoku-cal :syotoku="index" v-model="syotoku[index].value"></syotoku-cal>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Syotoku from '../mixins/syotoku.js'
import SyotokuCal from './syotoku_cal.vue'

export default {
  name: 'syotoku',
  components: {
    SyotokuCal,
  },
  data: function() {
    return {
      syotoku: {
        'eigyo': {ja: '営業所得'}, 'nogyo': {ja: '農業所得'}, 'fudosan': {ja: '不動産取得'},
        'risi': {ja: '利子所得'}, 'haito': {ja: '配当所得'}, 'kyuyo': {ja: '給与収入', value: 0},
        'nenkin': {ja: '年金収入', value: 0}, 'sonota': {ja: 'その他収入'}, 'sozyo_tan': {ja: '総譲短'},
        'sozyo_tyo': {ja: '総譲長'}, 'itizi': {ja: '一時'},
      },
      test: this.calKyuyo,
      result: 0,
    }
  },
  mixins: [Syotoku],

}
</script>

<style>

#total {
  border-top: solid;
}

</style>