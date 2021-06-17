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
    el: '#vm2',
    data: {
        a : 1,
        b : ''
    }
})

// 얘는 반응함
vm2.b = 'hi';

vm2.$watch('b', (newValue, oldValue) => {
    console.log('newValue ', newValue);
    console.log('oldValue ', oldValue);
})

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

// 인스턴스 라이프사이클. 자동으로 this 컨텍스트를 인스턴스에 바인딩함
// created: 인스턴스 생성 시 호출
// mounted: el -> vm3.$el로 마운트 된 직후 호출 
// updated: 재렌더링 후 호출. 무한루프가 발생할 수 있으므로 updated에서 상태 변경 X
// destroyed: 인스턴스 제거 후 호출. 바인딩이 해제, 이벤트 리스너 제거됨
var vm3 = new Vue({
    data: {
        a : 1
    },
    created: function () {
        console.log('a is: ', this.a); // this: vm3 instance
    },
    // this: undefined. 화살표 함수는 this를 가지지 않는다.   
    // created: () => {
    //     console.log('a is ', this.a); 
    // }
    mounted: function () {
        // 모든 자식 컴포넌트가 마운트 된 상태를 보장
        this.$nextTick(function () {
            console.log('모든 화면이 렌더링 된 후 실행');
        })
    },
    updated: function() {
        this.$nextTick(function () {
            console.log('전체가 업데이트 된 상태를 보장')
        })
    },
    destroyed: function() {
        console.log('a is: ', this.a);
    }
})