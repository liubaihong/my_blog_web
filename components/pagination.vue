<!--
 - Created by 陈文骁 on 2017/3/21.
 -->
<template>
    <div class="jumpPage clear mt-2" v-show="isshow">
        <span class="counts ilb mt-2">每页显示<span>10</span>条记录，共<span>{{totalcount || 0}}</span>条记录。</span>
        <div class="fr">
            <ul class="pagination">
                <li v-bind:class="{'disable':currentpage.value == 1}" v-on:click="select">&lt;</li>
                <li v-for="item in pagelist" v-on:click="select" v-bind:class="{'active':item.cur == currentpage.value,'ep':item.cla == true}" v-text="item.cur"></li>
                <!--<li class="ep">...</li>-->
                <!--<li>2</li>-->
                <!--<li>3</li>-->
                <!--<li>4</li>-->
                <!--<li class="ep">...</li>-->
                <!--<li>10</li>-->
                <li v-bind:class="{'disable':currentpage.value == totalpage}" v-on:click="select">&gt;</li>
            </ul>
            <div class="jumpPageInput">
                <span>跳转至<input class="pageInput" type="number" v-model="jumpToPage">页<button class="pageButton" v-on:click="jumpTo">跳转</button></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['opt', 'currentpage'],
        watch: {
            'opt': {
                handler(nval, oval){
                    console.log(nval,oval);
                    if(this.currentpage.value != '1'){
                    	nval.total = oval.total;
                    }
                    this.totalcount = nval.total;
                    if(nval.total == 0 || nval.total == undefined){
                        this.isshow = false;
                        return false;
                    }else{
                        this.isshow = true;
                        this.getNumber(nval.total, nval.index, nval.rows);
                    }
                    this.jumpToPage = this.currentpage.value;
                },
                deep: true
            },
            'index': {
                handler(nval, oval){
                    console.log(nval, oval);
                    this.currentpage.value = this.index;
                    this.$emit("page-change",this.index);
                },
                deep: true
            }
        },
        data(){
            return {
                pagelist: [],
                totalpage: 1,
                jumpToPage: 1,
                isshow: false,
                totalcount: 0,
                index:1
            }
        },
        created(){
            console.log(this.currentpage.value);
            if(this.currentpage.value != '1'){
                this.opt.total = this.opt.total;
            }
            this.totalcount = this.opt.total;
            if(this.opt.total == 0 || this.opt.total == undefined){
                this.isshow = false;
                return false;
            }else{
                this.isshow = true;
                this.getNumber(this.opt.total,this.currentpage.value,this.opt.rows);
            }
            this.jumpToPage = this.currentpage.value;
            console.log(this.currentpage.value);
        },
        methods: {
            select(e){
                if (e.currentTarget.innerText == '<' && (e.currentTarget.getAttribute('class') != 'disable')) {
                    this.index = parseInt(this.currentpage.value) - 1;
                } else if (e.currentTarget.innerText == '>' && (e.currentTarget.getAttribute('class') != 'disable')) {
                    this.index = parseInt(this.currentpage.value) + 1;
                } else {
                    if (e.currentTarget.innerText != '...' && e.currentTarget.innerText != this.currentpage.value && (e.currentTarget.getAttribute('class') != 'disable')) {
//                        console.log(e.currentTarget.innerText);
                        this.index = e.currentTarget.innerText;
//                        console.log(this.index);
                        this.currentpage.value = this.index;
                    }
                }
            },
            jumpTo(){
                if(this.jumpToPage <= this.totalpage && this.jumpToPage > 0 && this.jumpToPage != this.currentpage.value){
//                    this.currentpage = this.jumpToPage;
                    this.index = this.jumpToPage;
                }else if(this.jumpToPage >= this.totalpage){
                    this.jumpToPage = this.totalpage;
//                    this.currentpage = this.totalpage;
                    this.index = this.totalpage;
                }else if(this.jumpToPage < 1){
                    this.jumpToPage = this.totalpage;
                    this.currentpage.value = "1";
                }
            },
            getNumber(total, current, rows){
                let pages = [], page = 0;
                if (typeof total == 'string') {
                    total = parseInt(total);
                }
                if (typeof current == 'string') {
                    current = parseInt(current);
                }
                //计算页码数量
                if (total < 10) {
                    page = 1;
                } else {
                    page = Math.ceil(total / rows);
                }
                if (page <= 6) {
                    for (let i = 0; i < page; i++) {
                        pages.push({cur: i + 1, cla: ''});
                    }
                } else {
                    if (current == 1 || current == 2) {
                        pages.push({cur: 1, cla: ''}, {cur: 2, cla: ''}, {cur: 3, cla: ''}, {
                            cur: '...',
                            cla: true
                        }, {cur: page, cla: ''});
                    } else if (current == page || current == (page - 1)) {
                        pages.push({cur: 1, cla: ''}, {cur: '...', cla: true}, {cur: page - 2, cla: ''}, {
                            cur: page - 1,
                            cla: ''
                        }, {cur: page, cla: ''});
                    } else {
                        pages.push({cur: 1, cla: ''}, {cur: '...', cla: true}, {
                            cur: current - 1,
                            cla: ''
                        }, {cur: current, cla: ''}, {cur: current + 1, cla: ''}, {cur: '...', cla: true}, {
                            cur: page,
                            cla: ''
                        });
                    }
                }
                this.totalpage = page;
                this.pagelist = pages;
            }
        }
    }
</script>
<style scoped>

</style>