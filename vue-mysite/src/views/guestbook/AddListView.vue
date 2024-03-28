<template>
    <div id="wrap">

        <AppHeader />
        <!-- //header -->
        <!-- //nav -->

        <div id="container" class="clearfix">
            <div id="aside">
                <h2>방명록</h2>
                <ul>
                    <li>일반방명록</li>
                    <li>ajax방명록</li>
                </ul>
            </div>
            <!-- //aside -->

            <div id="content">

                <div id="content-head" class="clearfix">
                    <h3>일반방명록</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>방명록</li>
                            <li class="last">일반방명록</li>
                        </ul>
                    </div>
                </div>
                <!-- //content-head -->

                <div id="guestbook">
                    <form v-on:submit.prevent="writeGuestbook" action="" method="">
                        <table id="guestAdd">
                            <colgroup>
                                <col style="width: 70px;">
                                <col>
                                <col style="width: 70px;">
                                <col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><label class="form-text" for="input-uname">이름</label></th>
                                    <td><input id="input-uname" type="text" name="name" v-model="guestVo.name"></td>
                                    <th><label class="form-text" for="input-pass">패스워드</label></th>
                                    <td><input id="input-pass" type="password" name="pw" v-model="guestVo.pw"></td>
                                </tr>
                                <tr>
                                    <td colspan="4"><textarea name="content" cols="72" rows="5"
                                            v-model="guestVo.content"></textarea></td>
                                </tr>
                                <tr class="button-area">
                                    <td colspan="4" class="text-center"><button type="submit">등록</button></td>
                                </tr>
                            </tbody>

                        </table>
                        <!-- //guestWrite -->
                    </form>

                    <table class="guestRead" v-bind:key="i" v-for="(guestbookVo, i) in guestList">
                        <colgroup>
                            <col style="width: 10%;">
                            <col style="width: 40%;">
                            <col style="width: 40%;">
                            <col style="width: 10%;">
                        </colgroup>
                        <tr>
                            <td>{{ guestbookVo.no }}</td>
                            <td>{{ guestbookVo.name }}</td>
                            <td>{{ guestbookVo.regDate }}</td>
                            <td>
                                <router-link v-bind:to="`/guestbook/deleteform/${guestbookVo.no}`">[삭제]</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td colspan=4 class="text-left">{{ guestbookVo.content }}</td>
                        </tr>
                    </table>
                    <!-- //guestRead -->

                </div>
                <!-- //guestbook -->

            </div>
            <!-- //content  -->
        </div>
        <!-- //container  -->

        <AppFooter />
        <!-- //footer -->
    </div>
    <!-- //wrap -->
</template>

<script>

import "@/assets/css/guestbook.css"
import axios from 'axios';

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

export default {
    name: "AddListView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            guestList: [],
            guestVo: {
                name: "",
                pw: "",
                content: ""
            }
        };
    },
    methods: {
        writeGuestbook() {
            console.log("방명록 등록");

            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/guestbooks',
                headers: { "Content-Type": "application/json" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달 - modelattribute로 받아야함
                data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -requestbody로 받아야함
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.getList();
                this.guestVo.name = "";
                this.guestVo.pw = "";
                this.guestVo.content = "";

            }).catch(error => {
                console.log(error);
            });

        },
        getList() {
            console.log("리스트 가져오기");

            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/guestbooks',
                headers: { "Content-Type": "application/json" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달 - modelattribute로 받아야함
                //data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -requestbody로 받아야함
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.guestList = response.data;

            }).catch(error => {
                console.log(error);
            });
        },
    },
    created() {
        this.getList();
    }
};
</script>