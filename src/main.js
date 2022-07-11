export default function healthIndex(obj) {
if(obj.health >= 50) {
    return 'healthy'
} else if (obj.health >= 15 && obj.health< 50) {
    return 'wounded'
} else {
    return 'critical'
}
}

export function sortPers(mass) {
    let sortArr = mass.sort((a, b)=> {
       return a.health - b.health
      })
      return sortArr.reverse()
}
