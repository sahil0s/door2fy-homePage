export const initOTPless = (callback) => {

	const otplessInit = Reflect.get(window, 'otplessInit')

	const loadScript = () => {
		const isScriptLoaded = document.getElementById("otpless-sdk");
		if(isScriptLoaded) return;

		const script = document.createElement('script')
		script.id = 'otpless-sdk'
		script.type = 'text/javascript'
		script.src = 'https://otpless.com/v2/auth.js'
		// TODO: Add your app id
		script.setAttribute('data-appid', '67UHR8QORYI44NIGG7VD')
		document.body.appendChild(script)
	}

	otplessInit ? otplessInit() : loadScript()

	Reflect.set(window, 'otpless', callback)
}