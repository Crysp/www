---
title: Анимация контента
published: true
summary: Улучшаем впечатление от приложения очень простым способом
published_at: 2024-05-07
---
![](/notes/content_animation/cover.mp4)

Библиотека react-native-reanimated позволяет добавить анимированное появление или исчезновение элемента:

```jsx
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const Badge = ({ count }) => (
	<Animated.Text
		entering={FadeIn}
		exiting={FadeOut}
	>
		{count}
	</Animated.Text>
);
```

В таком варианте анимация сработает только при первом появлении компонента на экране и при изменении `count` никакой анимации не будет, потому что компонент, при изменении этого свойства, не пропадает с экрана.

Можно накрутить кастомную анимацию которая запускается при изменении свойства, но тогда это будет выглядеть намного сложнее и парой строчек кода тут дело не обойдется.

Предлагаю вспомнить про свойство `key` которое есть у каждого элемента в React. Обычно оно используется для отображения массива элементов. Но если вспомнить как это свойство работает, то оно сильно упростит нашу задачу.

Свойство `key` позволяет React'у связывать виртуальное дерево с реальным. Пока `key` не меняется, между рендерами React только обновляет свойства компонента. Но как только `key` изменится, компонент удаляется из дерева и добавляется новый с новым ключом — то что надо для запуска анимации.

```jsx
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated'

const Badge = ({ count }) => (
	<Animated.Text
		key={count}
		entering={FadeInDown}
		exiting={FadeOutUp}
	>
		{count}
	</Animated.Text>
)
```

Такой способ применим не только к тексту. Можно, например, очень приятно поменять иконку на кнопке.

![](/notes/content_animation/icon_transition.mp4)

```jsx
import { Pressable } from 'react-native'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'
import { Icon } from '~/components/Icon'

const Button = ({ icon }) => (
	<Pressable>
		<Animated.View
			key={icon}
			entering={ZoomIn}
			exiting={ZoomOut}
		>
			<Icon name={icon} />
		</Animated.View>
	</Pressable>
)
```