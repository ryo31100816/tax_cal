export default {
    methods: {
 
    },
    computed: {
      calKyuyo: function() {
        //  Object.assign(this.$appName, {aaa: this.kyuyo});
        //   console.log(this.$appName);
        const amount = this.value;
        let value;
        if(amount < 550000) {
            value = 0;
        }else if(amount <= 1625000) {
            value = amount - 550000;
        }else if(1625001 <= amount && amount <= 1800000) {
            value = (amount / 4000) * 2400 + 100000;
        }else if(1800001 <= amount && amount <= 3600000) {
            value = (amount / 4000) * 2800 + 80000;
        }else if(3600001 <= amount && amount <= 6600000) {
            value = (amount / 4000) * 3200 + 440000;
        }else if(6600001 <= amount && amount <= 8500000) {
            value = amount * 0.9 + 1100000;
        }else {
            value = amount - 1950000;
        }
        this.$store.dispatch('readSyotoku', {type: 'kyuyo', value: value});
        return value;
      },
      calNenkin: function() {
        const birth = this.$store.getters.getBirth;
        const amount = this.value;
        let value;

        if(birth >= this.$store.getters.getUnder65) {
            if(amount <= 600000) {
               value = 0;
            }else if(600000 < amount && amount < 13000000) {
               value = amount - 600000;
            }else if(13000000 <= amount && amount < 4100000) {
               value = (amount * 0.75) - 275000;
            }else if(41000000 <= amount && amount < 7700000) {
               value = (amount * 0.85) - 685000;
            }else if(77000000 <= amount && amount < 10000000) {
               value = (amount * 0.95) - 1455000;
            }else {
               value = amount - 1955000;
            }
            this.$store.dispatch('readSyotoku', {type: 'nenkin', value: value});
            return value;
        }
        if(amount <= 1100000) {
            value = 0;
        }else if(1100000 < amount && amount < 33000000) {
            value = amount - 1100000;
        }else if(33000000 <= amount && amount < 4100000) {
            value = (amount * 0.75) - 275000;
        }else if(41000000 <= amount && amount < 7700000) {
            value = (amount * 0.85) - 685000;
        }else if(77000000 <= amount && amount < 10000000) {
            value = (amount * 0.95) - 1455000;
        }else {
            value = amount - 1955000;
        }
        this.$store.dispatch('readSyotoku', {type: 'nenkin', value: value});
        return value;
      },
      totalCal: function() {
        return this.kyuyoCal + this.nenkinCal
      },
    },

}