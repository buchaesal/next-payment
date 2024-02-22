export default function Payment(){

    const initInicisScript = async () => {
        if (window.INIStdPay) {
            return
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = 'https://stgstdpay.inicis.com/stdjs/INIStdPay.js'
            script.async = true

            script.onload = () => {
                resolve()
            }

            script.onerror = () => {
                reject(new Error('Failed to load INIStdPay.js'))
            }

            document.head.appendChild(script)
        })
    }

    return (
        <>
            <h2>payment</h2>
            <button type={"button"}>결제하기</button>
            <div style={{ display: 'none' }}>
                <form
                    id="payForm"
                    name="payForm"
                    target="_self"
                    method="post"
                    acceptCharset={charset}
                    action={actionUrl}
                >
                    {Object.entries(payForm).map(([key, value]) => (
                        <input id={key} key={key} type="hidden" name={key} value={value} />
                    ))}
                </form>
            </div>
        </>
    )
}