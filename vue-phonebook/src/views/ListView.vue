<template>
    <h1>전화번호부</h1>

    <h2>리스트</h2>

    <p>등록된 전화번호 리스트입니다.</p>

    <table border="1">
        <colgroup>
            <col style="width: 100px;">
            <col style="width: 120px;">
            <col style="width: 120px;">
            <col style="width: 190px;">
        </colgroup>
        <thead>
            <tr>
                <th>이름(name)</th>
                <th>핸드폰(hp)</th>
                <th>회사(company)</th>
                <th>관리</th>
            </tr>
        </thead>
        <tbody v-bind:key="i" v-for="(personVo, i) in personList">
            <tr>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
                <td>
                    <button v-on:click="deletePerson(personVo.personId)" type="button">삭제하기</button>&nbsp;&nbsp;
                    <router-link v-bind:to="`/modifyform/${personVo.personId}`">[수정폼이동]</router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <br>

    <router-link to="/writeform">등록폼 이동</router-link>
</template>
<script>
import axios from 'axios';

export default {
    name: "ListView",
    components: {},
    data() {
        return {
            personList: [],

        };
    },
    methods: {
        getList() {
            console.log("데이터 가져오기");
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/phonebooks',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.personList = response.data;

            }).catch(error => {
                console.log(error);
            });
        },
        deletePerson(personId) {
            console.log("삭제");
            console.log(personId);

            axios({
                method: 'delete', // put, post, delete
                url: 'http://localhost:9000/api/phonebooks/delete',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: personId, //get방식 파라미터로 값이 전달
                data: personId, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.getList();

            }).catch(error => {
                console.log(error);
            });
  
        }
    },
    created() {
        this.getList();
    }
};
</script>
<style></style>
