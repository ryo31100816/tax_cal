<template>
    <div class="container">
      <div>
        <label for="eigyo">営業所得</label>
        <input type="number" id="eigyo" v-model="eigyo" />
      </div>
      <div>
        <label>農業所得</label>
        <input type="number" v-model="nogyo" />
      </div>
      <div>
        <label>不動産所得</label>
        <input type="number" v-model="fudosan" />
      </div>
      <div>
        <label>利子所得</label>
        <input type="number" v-model="risi" />
      </div>
      <div>
        <label>配当所得</label>
        <input type="number" v-model="haito" />
      </div>
      <div>
        <label>給与収入</label>
        <input type="number" v-model="kyuyo" />
      </div>
      <div>
        <label>給与所得</label>
        <input class="number" readonly v-model="kyuyoCal" />
      </div>
      <div>
        <label>公的年金等収入</label>
        <input type="number" v-model="nenkin" />
      </div>
       <div>
        <label>公的年金等所得</label>
        <input type="number" readonly v-model="nenkinCal" />
      </div>
      <div>
        <label>その他収入</label>
        <input type="number" v-model="sonota" />
      </div>
      <div>
        <label>総譲短</label>
        <input type="number" v-model="sozyotan" />
      </div>
      <div>
        <label>総譲長</label>
        <input type="number" v-model="sozyotyo" />
      </div>
      <div>
        <label>一時</label>
        <input type="number" v-model="itizi" />
      </div>
    </div>
   
</template>

<script>
// function pushValue(value) {
//   Object.assign(this.$appName, {aaa: value});
//   console.log(this.$appName);
// };

export default {
  name: 'syotoku',
  data: function() {
    return {
      eigyo: 0,
      nogyo: 0,
      fudosan: 0,
      risi: 0,
      haito:0,
      kyuyo: 0,
      nenkin: 0,
      sonota: 0,
      sozyotan: 0,
      sozyotyo: 0,
      itizi: 0,
    }
  },
  methods: {
   
  },
  computed: {
    kyuyoCal: function() {
      //  Object.assign(this.$appName, {aaa: this.kyuyo});
      //   console.log(this.$appName);
      if(this.kyuyo < 550000){
        return 0;
      }else if(this.kyuyo <= 1625000){
        return this.kyuyo - 550000;
      }else if(1625001 <= this.kyuyo && this.kyuyo <= 1800000){
        let result = (this.kyuyo / 4000) * 2400 + 100000;
        return result.toLocaleString('ja-JP');
      }else if(1800001 <= this.kyuyo && this.kyuyo <= 3600000){
        return this.kyuyo ;
      }else if(3600001 <= this.kyuyo && this.kyuyo <= 6600000){
        return this.kyuyo / 2;
      }else if(6600001 <= this.kyuyo && this.kyuyo <= 8500000){
        return this.kyuyo / 2;
      }else{
        return this.kyuyo -  1950000;
      }
       
    },
    nenkinCal: function() {
      const birth = this.$store.getters.getBirth;
      const amount = this.nenkin;
        console.log(birth >= this.$store.getters.getUnder65);
      if(birth >= this.$store.getters.getUnder65) {
      
             console.log('65未満');
        if(amount <= 600000) {
          return 0;
        }else if(600000 < amount && amount < 13000000) {
          return amount - 600000;
        }else if(13000000 <= amount && amount < 4100000) {
           return (amount * 0.75) - 275000;
        }else if(41000000 <= amount && amount < 7700000) {
           return (amount * 0.85) - 685000;
        }else if(77000000 <= amount && amount < 10000000) {
           return (amount * 0.95) - 1455000;
        }else {
           return amount - 1955000;
        }
      }else {
             console.log('65以上');
         if(amount <= 1100000) {
          return 0;
        }else if(1100000 < amount && amount < 33000000) {
          return amount - 1100000;
        }else if(33000000 <= amount && amount < 4100000) {
           return (amount * 0.75) - 275000;
        }else if(41000000 <= amount && amount < 7700000) {
           return (amount * 0.85) - 685000;
        }else if(77000000 <= amount && amount < 10000000) {
           return (amount * 0.95) - 1455000;
        }else {
           return amount - 1955000;
        }
      }

    }
  },
  // watch: {
  //   kyuyo: function(value) {
  //       Object.assign(this.$appName, {aaa: value});
  //       console.log(this.$appName);
  //   },
  //   eigyo: function(value) {
  //     Object.assign(this.$appName, {bbb: value});
  //     console.log(this.$appName);
  //   },
  // }
}
</script>