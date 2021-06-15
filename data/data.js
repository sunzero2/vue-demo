// 데이터 객체
var data = { a : 1};

// Vue 인스턴스에 데이터 객체 추가
var vm = new Vue({
    // data: data,
    data: { a : 1 },
})

// Vue 인스턴스의 data 속성은 인스턴스가 생성될 때 존재하는 것에만 반응함
// 즉, 아래와 같이 밖에서 새로 생성한 b의 경우 수정되어도 반응하지 않음(a에만 반응)
vm.b = 'hi';

// b 속성이 나중에 필요한 것을 알고 빈 값이거나 존재하지 않은 상태로 시작해야 한다면
// 아래와 같이 초기값 설정을 해줘야 함.
var vm2 = new Vue({
    data: {
        a : 1,
        b : ''
    }
})

// 얘는 반응함
vm2.b = 'hi';

var obj = {
    foo: 'bar'
}

// Object Freeze로 데이터가 변경되지 않음(Freeze : Read Only)
// 즉, Vue 인스턴스에서 반응하지 않음
Object.freeze(obj);

new Vue({
    el: '#freeze',
    data: obj
})

