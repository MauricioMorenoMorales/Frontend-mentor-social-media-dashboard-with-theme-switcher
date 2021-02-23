let DarkTheme = true
const $Switch = document.getElementById('switch')

$Switch.addEventListener('click', e => {
	if ($Switch.checked) {
		document.documentElement.style.setProperty('--bg', '#ffffff')
		document.documentElement.style.setProperty('--topBgPattern', '#f5f7ff')
		document.documentElement.style.setProperty('--cardBg', '#f0f2fa')
		document.documentElement.style.setProperty('--desaturatedText', '#63687e')
		document.documentElement.style.setProperty('--text', '#1e202a')
		DarkTheme = false
	} else {
		document.documentElement.style.setProperty('--bg', '#1e202a')
		document.documentElement.style.setProperty('--topBgPattern', '#1f212e')
		document.documentElement.style.setProperty('--cardBg', '#252a41')
		document.documentElement.style.setProperty('--desaturatedText', '#8b97c6')
		document.documentElement.style.setProperty('--text', '#ffffff')
		DarkTheme = true
	}
})
