export async function signupUser(data: { name: string, email: string, password: string }) {
    try {
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        const json = await res.json()

        if (!res.ok) {
            return { ok: false, message: json.message }
        }
        return {ok:true}
    }catch(err){
        return {ok:false,message:'Something went wrong'}
    }
}