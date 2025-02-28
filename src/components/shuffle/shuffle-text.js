/**
* Constructor.
* @param element DOM 为参数
*/
class ShuffleText {
  contentText
  /**
   * The string for random text.
   * 随机的内容。
   * @type {string}
   * @default 'キスト文字列です停止しテキストを設定しますます文字列です'
   */
  sourceRandomCharacter = 'キスト文字列です停止しテキストを設定しますます空离眛'
  /**
   * The string for effect space.
   * 空白に用いる文字列です。
   * 动画初始文字
   * @type {string}
   * @default '-'
   */
  emptyCharacter = '?'
  /**
   * The milli seconds of effect time.
   * エフェクトの実行時間（ミリ秒）です。
   * 动画持续时间
   * @type {number}
   * @default 600
   */
  duration = 600
  _isRunning = false
  _originalStr = ''
  _originalLength = 0
  _timeCurrent = 0
  _timeStart = 0
  _randomIndex= []
  _element
  _requestAnimationFrameId = 0
  constructor (element) {
    this.contentText = element.textContent
    this.setText(this.contentText ?? '')
    this._element = element
  }

  setText (text) {
    this._originalStr = text
    this._originalLength = text.length
  }

  /** Play effect. 再生を開始します。 */
  start () {
    const _this = this
    this.stop()
    this._randomIndex = []
    let str = ''
    for (let i = 0; i < this._originalLength; i++) {
      const rate = i / this._originalLength
      _this._randomIndex[i] = Math.random() * (1 - rate) + rate
      str += this.emptyCharacter
    }
    this._timeStart = new Date().getTime()
    this._isRunning = true
    this._requestAnimationFrameId = requestAnimationFrame(function () {
      _this.__onInterval()
    })
    if (this._element) {
      this._element.textContent = this.contentText
    }
  }

  /** Stop effect. 。 */
  stop () {
    this._isRunning = false
    cancelAnimationFrame(this._requestAnimationFrameId)
  }

  __onInterval () {
    const _this = this
    this._timeCurrent = new Date().getTime() - this._timeStart
    const percent = this._timeCurrent / this.duration
    let str = ''
    for (let i = 0; i < this._originalLength; i++) {
      if (percent >= _this._randomIndex[i]) {
        str += _this._originalStr.charAt(i)
      } else if (percent < _this._randomIndex[i] / 3) {
        str += _this.emptyCharacter
      } else {
        str += _this.sourceRandomCharacter.charAt(Math.floor(Math.random() * _this.sourceRandomCharacter.length))
      }
    }
    if (percent > 1) {
      str = _this._originalStr
      _this._isRunning = false
    }
    if (_this._element) {
      _this._element.textContent = str
    }
    if (_this._isRunning) {
      _this._requestAnimationFrameId = requestAnimationFrame(function () {
        _this.__onInterval()
      })
    }
  }
}
Object.defineProperty(ShuffleText.prototype, 'isRunning', {
  get: function () {
    return this._isRunning
  },
  enumerable: false,
  configurable: true
})


export default ShuffleText
