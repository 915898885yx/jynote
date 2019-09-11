class readStream {
  constructor (array) {
    this.array = array
    this.step = 500 // 一次加载条数
    this.timer = null
    this.interval = 1 // 加载间隔
  }

  setStep (step) {
    if (Object.prototype.toString.call(step).slice(8, -1) === 'Number') {
      this.step = Number(step)
    } else {
      return console.warn('step must be Number')
    }
  }

  getStep () {
    return this.step
  }

  setInterval (interval) {
    this.interval = interval
  }

  getInterval () {
    return this.interval
  }

  on (event, callback) {
    if (event == 'data') {
      this.timer = setInterval(() => {
        callback(this.reading())
        if (this.array.length <= 0) {
          clearInterval(this.timer)
        }
      }, this.interval * 1000)
    }
  }

  end () {
    clearInterval(this.timer)
  }

  reading () {
    let step = this.step
    if (this.step > this.array.length) {
      step = this.array.length
    }
    return this.array.splice(0, step)
  }
}

export readStream