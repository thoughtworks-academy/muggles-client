'use strict';

import moment from 'moment'
class DateService {

  constructor() {

  }

  format_date(appraises, formation) {
    appraises.forEach(appraise => {
      appraise.appraised_date = moment(appraise.appraised_date).format(formation)
    })
  }
}

export { DateService }
