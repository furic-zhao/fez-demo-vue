import ApiData from 'views/public/demo-data'

import Q from 'q'

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.list.jumbotron)
        })
    }
}
