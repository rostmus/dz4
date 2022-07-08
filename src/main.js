export default function healthIndex(obj) {
if(obj.health >= 50) {
    return 'healthy'
} else if (obj.health >= 15 && obj.health< 50) {
    return 'wounded'
} else {
    return 'critical'
}
}
