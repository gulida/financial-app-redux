export function authHeader() {
    // return authorization header with jwt token
    let phone = JSON.parse(localStorage.getItem('phone'))

    if (phone && phone.token) {
        return {'Authorization': 'Bearer' + phone.token}
    } else {
        return {}
    }
}