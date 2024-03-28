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

                <div id="content-head">
                    <h3>일반방명록</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>방명록</li>
                            <li class="last">일반방명록</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->

                <div id="guestbook">
                    <form v-on:submit.prevent="deleteGuestbook" action="" method="">
                        <table id="guestDelete">
                            <colgroup>
                                <col style="width: 10%;">
                                <col style="width: 40%;">
                                <col style="width: 25%;">
                                <col style="width: 25%;">
                            </colgroup>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password" name="pw" v-model="guestbookVo.pw"></td>
                                <td class="text-left"><button type="submit">삭제</button></td>
                                <td>
                                    <router-link to="/guestbook/addlist">[메인으로 돌아가기]</router-link>
                                </td>
                            </tr>
                        </table>
                        <input type='hidden' name="no" v-model="guestbookVo.no">
                    </form>

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
    name: "DeleteFormView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            guestbookVo: {
                no: this.$route.params.no,
                pw: ""
            }
        };
    },
    methods: {
        deleteGuestbook() {
            console.log("삭제");

            axios({
                method: 'delete', // put, post, delete
                url: 'http://localhost:9000/api/guestbooks',
                headers: { "Content-Type": "application/json" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달 - modelattribute로 받아야함
                data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -requestbody로 받아야함
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.$router.push("/guestbook/addlist");

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() { }
};
</script>