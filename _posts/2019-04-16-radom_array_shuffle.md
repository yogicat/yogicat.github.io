---
layout: post
title: 카드덱 셔플 알고리즘(Fisher–Yates)
categories: blog
tag: programming
date: 2019-04-15 13:24 +0900
---
카드게임을 한다고 가정해보자. 대부분의 카드게임은 카드를 랜덤으로 섞는것에서 부터(셔플) 시작한다. 주어진 카드덱을 가지고 셔플덱을 만드는 방법은 카드를 원래의 카드덱에서 무작위로 한개씩 뽑아서 새로운 덱을 쌓아가는 방법이 있다.

이를 실제 카드게임 상황이 아닌 코드로 구현한다고 생각해보자.

첫번째 방법은 - 원래의 배열에서 랜덤 요소를 뽑는다. 셔플 배열에 해당 요소가 있는지 확인한다. 있으면 다시 뽑고, 없으면 셔플 배열에 추가한다.
이 방법은 가면 갈수록 굉장히 느려진다. 갈수록 셔플 덱에 이미 있는 요소를 계속 뽑을 확율이 높아지므로, 작동은 하지만 효율적인 방식은 아니다.


```js
const arr = ['a','b','c','d','e','f']

function shuffle(array) {
  let copyArray = []
  let n = array.length
  let i = 0

  // 남아있는 요소가 있을때까지 실행
  while(n) {
    // 랜덤으로 선택 (기존 array안에서)
    i = Math.floor(Math.random() * array.length)

    // 해당 요소를 셔플덱으로 옮긴다.
    copyArray.push(array[i])

    // 해당 요소를 기존의 덱에서 삭제한다.
    array.splice(i,1)
    n--
  }
  return copyArray
}
```

여기서 array는 기존의 카드덱, copyArray는 셔플덱으로 생각할 수 있다.
array에서 임의 요소를 하나씩 선택하고 copyArray로 옮긴다. (기존 array에서는 삭제됨)
이때 array에서 이미 선택된 요소를 제거함으로써 중복 선택을 피할 수 있다.
[0, n-1]범위에서 임의 요소를 선택하고 n은 매 반복마다 하나씩 감소한다. n은 남아있는 카드의 수를 나타낸다.

하지만 기존의 덱에서 각 요소를 `splice`를 사용해 제거할 때 이어지는 요소들이 shift해서 옮겨져야 하므로 상대적으로 열악한 알고리즘 퍼포먼스를 가지게 된다. (평균적으로 한요소가 삭제될 때마다 `n/2` 요소가 옮겨져야 하므로)

이를 개선해보자.
셔플 된 요소의 갯수 + 남아있는 요소는 항상 전체 요소의 수와 동일하다.
셔플 된 요소의 갯수 = (전체 요소 - 남아있는 요소)
**(전체 - 남아있는 요소) + 남아있는 요소 = 전체 요소**

이 말의 의미는, 셔플 자체를 여분의 공간없이 배열 자체 내에서 해결할 수 있다는 의미이다.
배열의 뒷부분은 셔플된 요소를 담고, 배열의 앞부분에는 남아있는 요소를 담아서 해결할 수 있다.

1. 배열의 앞에서 랜덤으로 요소를 선택한다.
2. 배열의 뒷부분에 옮겨놓는다.
3. 이때 배열의 뒷부분에 있던 셔플 되지 않은 기존 요소는 앞으로 옮긴다.

다시 말하면 앞에서 선택한 한개의 요소와 뒤에 한개의 요소를 바꿔치는? swap을 하는 개념이다.


```js
function shuffle(array) {
  let temp
  let n = array.length
  let i = 0

  while (n) {

    i = Math.floor(Math.random() * n--)

    // temp에는 임시로 현재 요소를 담는다.
    temp = array[n]

    // 현재 배열의 마지막자리에 랜덤 요소를 담는다.
    array[n] = array[i]
    // 랜덤 요소가 있던 자리에는 현재 요소를 담는다.
    array[i] = temp
  }
  return array
}
```

이렇게 하면, 새로운 배열을 만들거나 매번 요소를 삭제하면서 재배열 없이 그 자리에서 셔플 덱을 만드는게 가능해진다.


코딩호러에서 정리한 내용을 살펴보면 *남아있는 요소에서 랜덤 요소를 선택하는 것*의 중요성을 알 수 있다.

```js
for (int i = 0; i < cards.Length; i++)
{
  // 전체 카드 요소에서 랜덤으로 선택
  int n = rand.Next(cards.Length);
  Swap(ref cards[i], ref cards[n]);
}
```

위의 방식은 제대로 동작하는 것 같지만, 수많은 중복된 세트를 뱉어낸다. (이때 `rand.Next(length)`는 계속 동일한 범위내에서 랜덤한 수를 뽑아내므로) 아래와 같은 방식으로 남아있는 요소에서 랜덤 요소를 선택할 수 있는 방식으로 구현을 해야 중복없이 뽑아낼 수 있다.


```js
for (int i = cards.Length - 1; i > 0; i--)
{
  // 남아있는 요소에서 랜덤 선택 (i가 줄어드므로)
  int n = rand.Next(i + 1);
  Swap(ref cards[i], ref cards[n]);
}
```


이렇게 랜덤덱을 형성하는 것과 같은 알고리즘을 Fisher-Yates Shuffle이라고 하며, 정해진 시퀀스에서 랜덤 순열을 생성하는 알고리즘이다.
현대의 버전은 2번째로 구현한 것과 같이 그 자리에서 (swap을 통해) 해결하는 방식(In-place algorithm)이다.


---

링크
- [Wikipedia: Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
- [Coding Horror: The danger of naviete](https://blog.codinghorror.com/the-danger-of-naivete/)
