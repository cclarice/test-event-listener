function generateMemory () {
	const array = []
	for (let i = 0xffffff; i >= 0; i--) {
		array[i] = i
	}
	return array
}

const add_remove = document.getElementById('add_remove')
const add_once = document.getElementById('add_once')
const remove = document.getElementById('remove')
const once = document.getElementById('once')

const generateRemoveEventWithMemory = (memory) => {
	const f = (event) => {
		console.log(event)
		if (memory.length) {
			console.log('remove')
		}
		this.removeEventListener('click', f)
	}
	return f
}

const generateOnceEventWithMemory = (memory) => {
	return (event) => {
		console.log(event)
		if (memory.length) {
			console.log('once')
		}
	}
}

add_remove.addEventListener('click', () => {
	console.log('add_remove click')
	remove.addEventListener('click', generateRemoveEventWithMemory(generateMemory()))
})

add_once.addEventListener('click', () => {
	console.log('add_once click')
	once.addEventListener('click', generateOnceEventWithMemory(generateMemory()), { once: true })
})
