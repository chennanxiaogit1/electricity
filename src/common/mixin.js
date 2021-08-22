export const tabControlMiXin = {
    data() {
        return {
            type:"pop"
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.type = "pop";
                    break;
                case 1:
                    this.type = "new";
                    break;
                case 2:
                    this.type = "sell";
                    break;
            }
        }
    }
}